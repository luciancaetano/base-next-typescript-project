import { applyMiddleware, createStore, Store } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducers from './reducers';

const enhancers = composeWithDevTools(applyMiddleware(ReduxThunk));
const makeConfiguredStore = (reducer) => createStore(reducer, composeWithDevTools());

const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfiguredStore(reducers);
  }
  const store:Store = createStore(reducers, enhancers) as Store;
  (store as any).__persistor = persistStore(store, {});

  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
