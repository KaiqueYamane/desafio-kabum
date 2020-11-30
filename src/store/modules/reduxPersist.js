import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistReducers = persistReducer({
    key: 'DESAFIO-KABUM',
    storage,
    whitelist: ['cartReducer']
  }, reducers);

  return persistReducers;
}