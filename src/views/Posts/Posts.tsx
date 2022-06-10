import { Box, Grid, Typography } from '@mui/material';

import { Status } from '../../types/types';

import { usePostsQuery } from '../../queries/post/usePostsQuery';

import { Loader } from '../../components/ui/Loader/Loader';
import { Empty } from '../../components/ui/Empty/Empty';
import { PostItem } from '../../components/PostItem/PostItem';

export const Posts = () => {
  const { posts, isLoading: isLoadingPosts } = usePostsQuery();

  return (
    <>
      <Typography sx={{ mb: 1 }} variant="h4">
        All Posts
      </Typography>
      <Grid container spacing={2}>
        {posts?.map((post) => (
          <Grid item xs={4} key={post.id}>
            <PostItem id={post.id} body={post?.body} title={post?.title} />
          </Grid>
        ))}
        <Box className="center" sx={{ height: '300px', width: '100%' }}>
          {posts?.length === 0 && isLoadingPosts !== Status.fetching && (
            <Empty src="/images/no-posts.png" text="There are no posts" />
          )}
          {isLoadingPosts === Status.fetching && <Loader />}
        </Box>
      </Grid>
    </>
  );
};
