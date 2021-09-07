import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import { ThemeProvider } from '@material-ui/core';

import { GlobalStyleSheet } from 'src/styles/GlobalStyleSheet/GlobalStyleSheet';
import FeedbackButton from 'src/components/modules/FeedbackButton/FeedbackButton';
import awsExports from 'src/config/aws-exports';
import theme from 'src/constants/theme';
import PageTransition from 'src/components/modules/PageTransition/PageTransition';
import { materialUiTheme } from 'src/styles/theme';
import { store } from 'src/redux/store';
import If from '@element/If/If';
import GlobalConfig from '@module/GlobalConfig/GlobalConfig';
import isInternetExplorer from '@util/isInternetExplorer';

// Import polyfills for IE11 support
if (
  process.env.NODE_ENV === 'production' &&
  process.browser &&
  isInternetExplorer()
) {
  import('core-js');
  require('es6-promise/auto');
  require('isomorphic-fetch');
  require('proxy-polyfill/proxy.min');
  const elementClosest = require('element-closest').default;
  elementClosest(window);
}

// Configure Amplify globally
// This sets Amplify up for ALL routes
Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyleSheet />

      <GlobalConfig>
        <ThemeProvider theme={materialUiTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalConfig>

      <If value={theme.FEEDBACK_URL}>
        <FeedbackButton
          external
          color="textPrimary"
          href={theme.FEEDBACK_URL}
          rel="noreferrer"
        >
          Feedback
        </FeedbackButton>
      </If>

      <PageTransition
        style={{ position: 'fixed', bottom: '8px', left: '8px' }}
      />
    </Provider>
  );
}

export default MyApp;
