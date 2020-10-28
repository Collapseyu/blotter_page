import React from 'react';

import Head from 'next/head';
import Router, { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';

import Button from '@/components/button';
import Card from '@/components/card';
import Input, { CheckBox, DatePicker, InputNumber, TextArea } from '@/components/input';
import { Flex } from '@/components/container';
import { message } from '@/components/notification';
import Popover from '@/components/popover';
import { Loading, Success, Plus } from '@/components/svg';
import TagSearch from '@/components/tag_search';
import PostContent from '@/components/post_content';
import Anchor from '@/components/anchor';

import importImages from './images';
import RenderEditor from './editor';
import RenderFixedButton from './buttons';

import moment from '@/utils/moment';
import ShowNotification from '@/utils/notification';
import { Context } from '@/utils/global';
import { waitUntil } from '@/utils/debounce';
import { markdown, adminPost, postExist, postEdit } from '@/utils/api';
import { setLocalStorage, getLocalStorage, removeLocalStorage } from '@/utils/storage';

import styles from './post.module.scss';
import { exception } from 'console';

interface PostEditProps extends React.ComponentProps<'base'>, WithRouterProps {}

type PostEditState = {
  preview: 0 | 1 | 2;
  loading: boolean;
  submitDisabled: boolean;
  draft: string;
  offset: number;
  fontSize: number;
  fullscreen: boolean;
} & TypeTReplaceByU<Blotter.PostAll, { publish_time: number; edit_time: number }>;

class PostEdit extends React.Component<PostEditProps, PostEditState> {
  static defaultProps = {};
  previewRef = React.createRef<HTMLDivElement>();
  editor: any;
  ws: WebSocket;

  constructor(props: any) {
    super(props);
    const now = new Date().getTime();
    this.state = {
      preview: 0,
      loading: false,

      submitDisabled: false,
      draft: '',
      offset: 0,
      fontSize: 16,
      images: [],
      fullscreen: false,

      keywords: [],
      id: '',
      title: '',
      url: '',
      abstract: '',
      head_image: '',
      view: 0,
      publish_time: now,
      edit_time: now,
      published: false,
      raw: '',
      content: '',
      tags: [],
      length: 0,
    };
  }

  componentDidMount() {
    var url = this.props.router.query.url as string;
    const value = getLocalStorage(`post-${url}`);
    this.setState({ draft: value });
    if (url != '' && typeof url != 'undefined') this.initial(url, true);

    this.ws = new WebSocket(`${window.location.origin.replace('http', 'ws')}/api/markdown/ws`);
    this.ws.onclose = this.wsClose;
    window.addEventListener('beforeunload', this.wsClose);
  }

  componentWillUnmount() {
    this.wsClose();
  }

  wsClose = () => {
    console.log('WS close');
    if (!!this.ws) this.ws.close();
    this.ws = undefined;
    window.removeEventListener('beforeunload', this.wsClose);
  };

  initial = (url: string, first: boolean) => {
    this.setState({ loading: true });
    adminPost(url)
      .then((r) => {
        const post = {
          ...r,
          edit_time: first ? new Date().getTime() : r.edit_time * 1000,
          publish_time: r.publish_time * 1000,
        };
        this.setState(
          (state) => ({ ...state, ...post }),
          () => {
            if (!!this.editor) this.editor.setValue(r.raw);
          },
        );
      })
      .finally(() => this.setState({ loading: false }));
  };

  renderMarkdown = async (source: string) => {
    this.setState({ loading: true });
    var r = { html: '' };

    if (!!this.ws) {
      try {
        this.ws.send(JSON.stringify({ source }));
      } catch {
        this.wsClose();
        return;
      }
      var got = false;
      this.ws.onmessage = (msg) => {
        const obj = JSON.parse(msg.data);
        if (typeof obj.html === 'string') {
          r.html = obj.html;
        } else {
          console.error('Can not parse', obj);
        }
        this.ws.onmessage = undefined;
        got = true;
      };
      await new Promise((resolve) => {
        var start = new Date();
        var timer = setInterval(() => {
          if (got || new Date().getTime() - start.getTime() > 10000) {
            clearInterval(timer);
            resolve(true);
          }
        }, 100);
      });
    } else {
      var r = await markdown(source);
    }

    try {
      // 当没有中文时，words 返回的是 null，需要使用 || 设置默认值 []
      const words = r.html.replace(/<[^>]+>|\s/g, '').match(/[\u007f-\uffff]/g) || [];
      this.setState({
        content: r.html,
        length: words.length,
      });
    } catch (e) {
      r = { html: '' };
      console.error(e);
    }
    this.setState({ loading: false });
  };

  onChange = (value: string) => {
    waitUntil(
      'post_edit_sync',
      () => {
        setLocalStorage(`post-${this.props.router.query.url as string}`, value);
        if (this.state.preview) {
          this.renderMarkdown(value);
        }
      },
      1000,
    );
  };

  //   urlValidator = async (rule, value, callback, s, o) => {
  //     waitUntil(
  //       'post_edit_url',
  //       async () => {
  //         console.log(rule, value, callback, s, o);
  //         var r = await postExist(value);
  //         if (r.existed) {
  //           callback();
  //         } else {
  //           callback('123');
  //         }
  //       },
  //       1000,
  //     );
  //   };

  tagOnAdd = (tag: Blotter.Tag) => {
    this.setState((state) => ({
      tags: [...state.tags].filter((_tag) => _tag.short !== tag.short).concat(tag),
    }));
  };

  tagOnDelete = (tag: Blotter.Tag) => {
    this.setState((state) => {
      var tags = state.tags.filter((_tag) => _tag.short != tag.short);
      return { tags };
    });
  };

  getPostAll = () => {
    const post: Blotter.PostAll = {
      id: this.state.id,
      title: this.state.title,
      url: this.state.url,
      keywords: this.state.keywords,
      published: this.state.published,
      abstract: this.state.abstract,
      view: this.state.view,
      head_image: this.state.head_image,
      tags: this.state.tags,
      publish_time: parseInt(`${this.state.publish_time / 1000}`),
      edit_time: parseInt(`${this.state.edit_time / 1000}`),
      raw: this.state.raw,
      images: this.state.images,
      content: this.state.content,
      length: this.state.length,
    };
    return post;
  };

  submit = async () => {
    this.setState({ submitDisabled: true });
    try {
      const post = this.getPostAll();
      delete post.content;
      console.log(post);
      postEdit(post)
        .then((r) => {
          if (ShowNotification(r)) {
            Router.push(`/admin/post?url=${post.url}`);
            this.initial(post.url, false);
            removeLocalStorage(`post-${this.props.router.query.url as string}`);
          }
        })
        .finally(() => {
          this.setState({ submitDisabled: false });
        });
    } catch (e) {
      const err = e.errorFields.map((item) => item.errors.join(' ')).join('\n');
      message({ alertType: 'error', title: '信息错误', content: err });
      this.setState({ submitDisabled: false });
    }
  };

  onScroll = (scrollTop: number, scrollHeight: number) => {
    if (this.state.preview === 2 && !!this.previewRef.current) {
      this.previewRef.current.scrollTop =
        (scrollTop / scrollHeight) * this.previewRef.current.scrollHeight + this.state.offset;
    }
  };

  renderPreview = () => {
    const post = this.getPostAll();
    return (
      <Card neumorphism style={{ position: 'relative', overflow: 'hidden' }}>
        <Anchor
          style={{ position: 'absolute' }}
          container={this.previewRef.current}
          content={post.content}
        />
        <div className={styles.preview} ref={this.previewRef}>
          {this.state.loading ? <Loading /> : <Success />}
          <PostContent post={post} />
          {this.state.preview === 2 ? <div style={{ height: 'calc(100vh - 20px)' }}></div> : null}
        </div>
      </Card>
    );
  };

  renderToolbar = () => {
    return (
      <Flex direction="TB" fullWidth>
        <Input
          label="文章ID"
          disabled
          placeholder="文章ID"
          prefix="ID"
          value={this.state.id}
          onChange={(id) => this.setState({ id })}
          style={{ width: '100%' }}
        />
        <Flex mainSize="middle" subSize="middle">
          <Input
            label="文章链接"
            placeholder="文章链接"
            prefix="/post/"
            value={this.state.url}
            onChange={(url) => this.setState({ url })}
          />
          <InputNumber
            label="阅读量"
            placeholder="阅读量"
            min={0}
            value={this.state.view}
            onChange={(view) => this.setState({ view })}
          />
          <DatePicker
            label="发布时间"
            placeholder="发布时间"
            value={this.state.publish_time}
            onChange={(publish_time) => this.setState({ publish_time })}
          />
          <DatePicker
            label="编辑时间"
            placeholder="编辑时间"
            value={this.state.edit_time}
            onChange={(edit_time) => this.setState({ edit_time })}
          />
          <Input
            label="文章标题"
            placeholder="文章标题"
            value={this.state.title}
            onChange={(title) => this.setState({ title })}
          />
          <Input
            label="头图"
            placeholder="头图"
            value={this.state.head_image}
            onChange={(head_image) => this.setState({ head_image })}
          />
          <CheckBox
            switchStyle
            checkText="发布"
            uncheckText="草稿"
            value={this.state.published}
            onChange={(published) => this.setState({ published })}
          />
          <Button
            neumorphism
            onClick={() => {
              this.editor.setValue(this.state.draft);
            }}
          >
            文章恢复
          </Button>

          <InputNumber
            label="字体大小"
            value={this.state.fontSize}
            onChange={(fontSize) => this.setState({ fontSize })}
          />

          <Button
            neumorphism
            onClick={() => {
              const now = new Date().getTime();
              this.setState({ publish_time: now, edit_time: now });
            }}
          >
            重置日期
          </Button>

          <Button
            neumorphism
            onClick={async () => {
              await this.renderMarkdown(this.state.raw);
              this.setState({ images: importImages(this.state.content) });
            }}
          >
            导入图片
          </Button>
        </Flex>

        <TagSearch onAdd={this.tagOnAdd} onDelete={this.tagOnDelete} tags={this.state.tags} />

        <TextArea
          label="文章摘要"
          rows={5}
          spellCheck="false"
          placeholder="文章摘要"
          value={this.state.abstract}
          onChange={(abstract) => this.setState({ abstract })}
        />

        <Flex
          direction="TB"
          subAxis="flex-end"
          fullWidth
          wrap={false}
          style={{ maxHeight: '50vh', overflow: 'auto' }}
        >
          {!!this.state.images &&
            this.state.images.map((image, idx) => (
              <Flex key={idx} wrap={false}>
                <Flex.Item style={{ flex: '0 0 3em' }}>
                  <strong>{idx}</strong>
                </Flex.Item>
                <Flex.Item style={{ flex: '0 0 auto' }}>
                  <Popover
                    card
                    shadow
                    trigger={['click']}
                    component={
                      <Card>
                        <Flex>
                          确认删除？
                          <Button
                            primary
                            neumorphism
                            onClick={() =>
                              this.setState((state) => ({
                                images: state.images.filter((_, idx2) => idx != idx2),
                              }))
                            }
                          >
                            删除
                          </Button>
                        </Flex>
                      </Card>
                    }
                  >
                    <Button danger neumorphism>
                      删除
                    </Button>
                  </Popover>
                </Flex.Item>
                <Flex.Item style={{ flex: '1 1 auto' }}>
                  <Input
                    value={image}
                    onChange={(value) => {
                      this.setState((state) => {
                        var { images } = state;
                        images[idx] = value;
                        return { images };
                      });
                    }}
                  />
                </Flex.Item>
                <Flex.Item style={{ flex: '0 0 auto' }}>
                  <img src={image} style={{ maxHeight: '100px' }} />
                </Flex.Item>
              </Flex>
            ))}
        </Flex>
        <Flex.Item style={{ textAlign: 'right' }}>
          <Button
            neumorphism
            prefix={<Plus />}
            onClick={() => this.setState((state) => ({ images: [...state.images, ''] }))}
          >
            添加走马灯
          </Button>
        </Flex.Item>
      </Flex>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Context.Consumer>
          {(context) => (
            <Head>
              <title>{`文章编辑|后台|${context.blog_name}`}</title>
            </Head>
          )}
        </Context.Consumer>

        <RenderFixedButton
          preview={this.state.preview}
          onPreviewClick={(preview) => {
            if (preview !== 0) this.renderMarkdown(this.state.raw);
            this.setState({ preview }, () => {
              if (!!this.editor) this.editor.layout();
            });
          }}
          onSubmit={this.submit}
          submitDisabled={this.state.submitDisabled}
          onScrollOffset={(diff) => {
            this.setState(
              (state) => ({ offset: state.offset + diff }),
              () => {
                if (!!this.editor)
                  this.onScroll(this.editor.getScrollTop(), this.editor.getScrollHeight());
              },
            );
          }}
          onFold={() => this.editor.trigger('fold', 'editor.foldAll')}
          onUnfold={() => this.editor.trigger('unfold', 'editor.unfoldAll')}
          fullscreen={this.state.fullscreen}
          onFullScreen={(fullscreen) => {
            this.setState({ fullscreen }, () => {
              this.editor.layout();
            });
          }}
          style={this.state.fullscreen ? { zIndex: 5 } : {}}
        />

        <Flex direction="TB" fullWidth>
          <Card neumorphism>{this.renderToolbar()}</Card>

          {this.state.preview === 1 ? this.renderPreview() : null}

          <Flex
            wrap={false}
            style={
              this.state.fullscreen
                ? {
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'var(--background)',
                    width: '100%',
                    zIndex: 4,
                  }
                : {}
            }
          >
            <Flex.Item style={{ flex: '1', width: this.state.preview === 2 ? '0%' : '100%' }}>
              <Card neumorphism className={styles.editor} id="editor">
                <RenderEditor
                  raw={this.state.raw}
                  fontSize={this.state.fontSize}
                  getRef={(ref) => {
                    this.editor = ref;
                  }}
                  onChange={() => {
                    waitUntil(
                      'editor-onchange',
                      () => {
                        const value = this.editor.getValue();
                        setLocalStorage(`post-${this.props.router.query.url as string}`, value);
                        if (this.state.preview !== 0) this.renderMarkdown(value);
                        this.setState({ raw: value });
                      },
                      300,
                    );
                  }}
                  onSave={this.submit}
                  onScoll={(e) => this.onScroll(e.scrollTop, e.scrollHeight)}
                />
              </Card>
            </Flex.Item>
            {this.state.preview === 2 ? (
              <Flex.Item style={{ flex: '1', width: '0%' }}>{this.renderPreview()}</Flex.Item>
            ) : null}
          </Flex>
        </Flex>
      </React.Fragment>
    );
  }
}

export default withRouter(PostEdit);
