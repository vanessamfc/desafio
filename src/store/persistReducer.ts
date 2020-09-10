import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Reducer } from 'react';

export default (reducers: Reducer<any, any>) => {
  const persistedReducer = persistReducer(
    {
      key: 'dogs',
      storage,
      whitelist: ['dogs'],
    },
    reducers
  );
  return persistedReducer;
};
