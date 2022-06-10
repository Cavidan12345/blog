import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addPost, updatePost } from '../../lib/api';
import { Status } from '../../types/types';
import { useActions } from '../../hooks/useActions';

export const usePostMutateQuery = (postId: string, body: { title: string; body: string }) => {
  const [isLoading, setIsLoading] = useState<Status>(Status.idle);
  const navigate = useNavigate();
  const showSnackbar = useActions();

  const handleMutatePost = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(Status.fetching);

    try {
      let res;
      if (postId) {
        // Updating post
        res = await updatePost(postId, body);
        navigate(`/posts/${res.data.id}`);
        showSnackbar({ variant: 'success', message: 'Post updated!', show: true });
      } else {
        // Creating new post
        res = await addPost(body);
        navigate(`/posts/${res.data.id}`);
        showSnackbar({ variant: 'success', message: 'Post created!', show: true });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(Status.idle);
    }
  };

  return {
    handleMutatePost,
    isLoading,
  };
};
