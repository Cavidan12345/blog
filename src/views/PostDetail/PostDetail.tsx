import { ChangeEvent, FormEvent, Fragment, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Divider, TextField, Typography } from '@mui/material';

import { createComment, getPost } from '../../lib/api';
import { useSinglePostQuery } from '../../queries/post/useSinglePostQuery';
import { usePostDeleteQuery } from '../../queries/post/usePostDeleteQuery';

import { CommentsWrapper, FormWrapper } from './PostDetailStyled';

import { PostItem } from '../../components/PostItem/PostItem';
import { Empty } from '../../components/ui/Empty/Empty';
import { Loader } from '../../components/ui/Loader/Loader';
import { useActions } from '../../hooks/useActions';

export const PostDetail = () => {
  const { postId } = useParams();
  const showSnackbar = useActions();
  const commentRef = useRef<HTMLInputElement>(null);

  const onCommentInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    commentRef.current!.value = e.target.value;
  };

  const { submitDeletePost } = usePostDeleteQuery(postId!);

  const { post, isLoading: isLoadingPost, setPost } = useSinglePostQuery(postId!);

  const submitCreateComment = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const body = { postId: parseInt(postId!), body: commentRef!.current!.value };
    createComment(body).then(() => {
      getPost(postId!).then((res) => {
        setPost(res.data);
        showSnackbar({ variant: 'success', message: 'Comment added!', show: true });
      });
    });
  };

  if (isLoadingPost === 'fetching') {
    return <Loader height={300} />;
  }

  if (!post) {
    return <Empty src="/images/no-posts.png" text="Post was not found" goBackBtn height={300} />;
  }

  return (
    <>
      <PostItem
        detailPage
        title={post?.title}
        body={post?.body}
        id={post?.id}
        submitDeletePost={submitDeletePost}
      />
      <FormWrapper component="form" onSubmit={submitCreateComment}>
        <TextField
          placeholder="Comment"
          label="Comment"
          ref={commentRef}
          onChange={onCommentInputChange}
        />
        <Button type="submit" variant="contained" sx={{ mt: 1 }}>
          Add comment
        </Button>
      </FormWrapper>
      <CommentsWrapper sx={{ mt: 2 }}>
        <Typography variant="h6">Comments</Typography>
        {post?.comments?.map((comment) => {
          return (
            <Fragment key={comment.id}>
              <Typography variant="body2">{comment.body}</Typography>
              <Divider />
            </Fragment>
          );
        })}
      </CommentsWrapper>
    </>
  );
};
