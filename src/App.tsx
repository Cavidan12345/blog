import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import store from './redux/store';
import theme from './theme/theme';

import { Layout } from './views/Layout/Layout';
import { CustomAlert } from './components/ui/Snackbar/Alert';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Layout />
          <CustomAlert />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
