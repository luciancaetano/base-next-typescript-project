import { storeWrapper } from '@redux/configurestore';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';
import GlobalStyle from '@configs/global.styles';

const App = ({ Component, pageProps }) => {
  const store = useStore();
  return (
    <PersistGate persistor={(store as any).__persistor} loading={<div>Loading</div>}>
      <GlobalStyle />
      <Component {...pageProps} />
    </PersistGate>
  );
};

export default storeWrapper.withRedux(App);
