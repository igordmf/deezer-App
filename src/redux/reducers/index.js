import { combineReducers } from 'redux';
import musicsReducer from './musicsReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  musicsReducer,
  favoritesReducer,
});

export default rootReducer;
