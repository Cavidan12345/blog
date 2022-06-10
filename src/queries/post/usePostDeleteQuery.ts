import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { deletePost } from '../../lib/api';

export const usePostDeleteQuery = (postId: string) => {
  const navigate = useNavigate();
  const showSnackbar = useActions();

  const submitDeletePost = () => {
    deletePost(postId!)
      .then(() => {
        navigate('/posts');
        showSnackbar({ variant: 'info', message: 'Post deleted!', show: true });
      })
      .catch((err: AxiosError) => console.log(err));
  };
  return {
    submitDeletePost,
  };
};
