import React from 'react';

import { Skeleton } from 'antd';
import Link from 'next/link';
import Router from 'next/router';

import Image from '@/components/image';
import TagPart from '@/components/tag';
import Card from '@/components/card';
import { Flex } from '@/components/container';
import { Eye, Calendar, Tag, Edit } from '@/components/svg';
import { A } from '@/components/button';

import { Context } from '@/utils/global';
import { concat } from '@/utils/component';

import textStyles from '@/styles/text.less';

type PostCardProps = {
  post: Blotter.PostCard | undefined;
  loading: boolean;
};

export function CardContent(props: { post: Blotter.PostCard; inPost?: boolean }) {
  const { inPost = false, post } = props;
  const context = React.useContext(Context);
  const title = [
    <h2 key="title" className={concat(textStyles.color, textStyles.ellipsis)} title={post.title}>
      {post.title}
    </h2>,
    <p key="abstract" className={textStyles.color}>
      {post.abstract}
    </p>,
  ];
  return (
    <Flex direction="TB" fullWidth>
      {!inPost ? (
        <Link href="/post/[url]" as={`/post/${post.url}`}>
          <a className={textStyles.color}>{title}</a>
        </Link>
      ) : (
        title
      )}

      <Flex mainAxis="flex-start">
        <Flex mainAxis="flex-start" mainSize="small">
          <Eye />
          {post.view}
        </Flex>
        <Flex mainAxis="flex-start" mainSize="small">
          <Calendar />
          {post.publish_time}
        </Flex>
        {post.publish_time == post.edit_time ? null : (
          <Flex mainAxis="flex-start" mainSize="small">
            <Edit />
            {post.edit_time}
          </Flex>
        )}
        {inPost && (context.user.permission & 1) == 1 ? (
          <Link href={`/admin/post?url=${post.url}`} passHref>
            <A primary neumorphism size="small" target="_blank">
              编辑
            </A>
          </Link>
        ) : null}
      </Flex>

      <Flex mainAxis="flex-start" subSize="middle">
        {[
          <Tag key="tag_icon" />,
          ...post.tags.map((tag: Blotter.Tag) => <TagPart key={tag.short} tag={tag} />),
        ]}
      </Flex>
    </Flex>
  );
}

export default function PostCard(props: PostCardProps) {
  const post = props.post as Blotter.PostCard;
  const loading = props.loading || typeof props.post === 'undefined';

  return (
    <Card
      neumorphism
      cover={
        !loading && post.head_image ? (
          <Image
            src={post.head_image}
            height="300px"
            alt={`文章『${post.title}』的头图`}
            title={post.title}
          />
        ) : null
      }
    >
      <Skeleton loading={loading} active>
        {loading ? null : <CardContent post={post} />}
      </Skeleton>
    </Card>
  );
}
