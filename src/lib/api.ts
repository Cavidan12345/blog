import axios from './axiosInsatnce';

// @desc        Get all posts
export const getPosts = () => {
  return axios.get('/posts');
};

// @desc        Get single post
export const getPost = (postId: string) => {
  return axios.get(`/posts/${postId}`, {
    params: {
      _embed: 'comments',
    },
  });
};

// @desc        Create post
export const addPost = (body: { title: string; body: string }) => {
  return axios.post('/posts', body);
};

// @desc        Update post
export const updatePost = (postId: string, body: { title: string; body: string }) => {
  return axios.put(`/posts/${postId}`, body);
};

// @desc        Delete post
export const deletePost = (postId: string) => {
  return axios.delete(`/posts/${postId}`);
};

// @desc        Create comment
export const createComment = (body: { postId: number; body: string }) => {
  return axios.post('/comments', body);
};
