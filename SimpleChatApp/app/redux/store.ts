import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../core/chat-module/reducers/chat.reducer';

const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export default store;
