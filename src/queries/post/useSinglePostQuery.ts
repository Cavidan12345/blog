import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { getPost } from '../../lib/api';
import { PostType, Status } from '../../types/types';

export const useSinglePostQuery = (postId: string, onSuccess?: (res: AxiosResponse) => void) => {
  const [isLoading, setIsLoading] = useState<Status>(Status.idle);
  const [post, setPost] = useState<PostType | null>();
  const ref = useRef(false);

  useEffect(() => {
    if (postId) {
      setIsLoading(Status.fetching);
      getPost(postId)
        .then((res: AxiosResponse) => {
          setPost(res.data);
          if (onSuccess) {
            onSuccess(res);
          }
        })
        .catch((err: AxiosError) => console.log(err))
        .finally(() => setIsLoading(Status.idle));
    }
    ref.current = true;
  }, [postId, onSuccess]);

  return {
    isLoading,
    post,
    setPost,
  };
};
