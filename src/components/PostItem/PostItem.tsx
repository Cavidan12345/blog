// Library imports
import { CardContent, Button, Typography, CardActions, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// My imports
import { PostType } from '../../types/types';
import { sliceString } from '../../utils/sliceString';
import { EditLink, PostItemTitle, PostItemWrapper } from './PostItemStyles';

type PostItemProps = PostType & { detailPage?: boolean; submitDeletePost?: () => void };

export const PostItem = ({
  id,
  title,
  body,
  detailPage = false,
  submitDeletePost,
}: PostItemProps) => {
  return (
    <PostItemWrapper className={!detailPage ? 'card' : ''} variant="outlined">
      <CardContent>
        <PostItemTitle variant="h5">
          {!detailPage && title?.length > 50 ? sliceString(title, 50) + '...' : title}
        </PostItemTitle>
        <Typography variant="body2">
          {!detailPage && body?.length > 100 ? sliceString(body, 100) + '...' : body}
        </Typography>
      </CardContent>
      <CardActions>
        {!detailPage && (
          <Link to={`/posts/${id}`}>
            <Button size="small">Learn More</Button>
          </Link>
        )}
        {detailPage && (
          <Box>
            <EditLink to={`/posts/edit/${id}`}>
              <Button variant="contained" size="small">
                Edit post
              </Button>
            </EditLink>
            <Button onClick={submitDeletePost}>Delete post</Button>
          </Box>
        )}
      </CardActions>
    </PostItemWrapper>
  );
};
