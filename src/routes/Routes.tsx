import { Routes, Route } from 'react-router-dom';

import { Home } from '../views/Home/Home';
import { NotFound } from '../views/NotFound/NotFound';
import { PostAddEdit } from '../views/PostAddEdit/PostAddEdit';
import { PostDetail } from '../views/PostDetail/PostDetail';
import { Posts } from '../views/Posts/Posts';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:postId" element={<PostDetail />} />
      <Route path="/posts/new" element={<PostAddEdit />} />
      <Route path="/posts/edit/:postId" element={<PostAddEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
