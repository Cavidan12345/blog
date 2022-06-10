import { useEffect, useState } from 'react';
import { getPosts } from '../../lib/api';
import { PostType, Status } from '../../types/types';

export const usePostsQuery = () => {
  const [isLoading, setIsLoading] = useState<Status>(Status.idle);
  const [posts, setPosts] = useState<PostType[]>();

  useEffect(() => {
    setIsLoading(Status.fetching);
    getPosts()
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(Status.idle));
  }, []);

  return {
    posts,
    isLoading,
  };
};
