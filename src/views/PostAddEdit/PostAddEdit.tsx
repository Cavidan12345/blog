import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Box, TextField, Typography } from '@mui/material';
import { AxiosResponse } from 'axios';

import { Status } from '../../types/types';

import { useSinglePostQuery } from '../../queries/post/useSinglePostQuery';
import { usePostMutateQuery } from '../../queries/post/usePostMutateQuery';

import { FormWrapper } from './PostAddEditStyles';

import { useForm } from '../../hooks/useForm';

import { Button } from '../../components/ui/Button/Button';
import { Loader } from '../../components/ui/Loader/Loader';

export const PostAddEdit = () => {
  const { postId } = useParams();
  const { formData, onChangeInput, setFormData } = useForm({ title: '', body: '' });

  const { isLoading: isFetchingPost } = useSinglePostQuery(
    postId!,
    useCallback(
      (res: AxiosResponse) => {
        setFormData({ title: res.data.title, body: res.data.body });
      },
      [setFormData],
    ),
  );

  const { isLoading: isMutatingPost, handleMutatePost } = usePostMutateQuery(postId!, {
    title: formData.title,
    body: formData.body,
  });

  return (
    <Box className="center" sx={{ width: '100%' }}>
      <FormWrapper onSubmit={handleMutatePost} className="center">
        <Typography variant="h5">{postId ? 'Update post' : 'Create post'}</Typography>
        {isFetchingPost === Status.fetching && <Loader height={250} />}
        {isFetchingPost === Status.idle && (
          <>
            <TextField
              fullWidth
              size="small"
              name="title"
              variant="outlined"
              label="Title"
              value={formData.title}
              onChange={onChangeInput}
              sx={{ mb: 2, mt: 1 }}
            />
            <TextField
              fullWidth
              multiline
              rows={6}
              size="small"
              name="body"
              variant="outlined"
              label="Body"
              value={formData.body}
              onChange={onChangeInput}
            />
            <Button
              isLoading={isMutatingPost}
              type="submit"
              sx={{ mt: 2, height: '42px' }}
              variant="contained">
              {postId ? 'Update post' : 'Create post'}
            </Button>
          </>
        )}
      </FormWrapper>
    </Box>
  );
};
