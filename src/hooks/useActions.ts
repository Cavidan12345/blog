import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showSnackbar } from '../redux/snackbar/snackbarActions';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(showSnackbar, dispatch);
};
