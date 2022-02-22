import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../service/cryptoApi';
import { cryptoNewsApi } from '../service/cryptoNewApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
  }
});