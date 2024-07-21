import { combineReducers } from 'redux';
import chatReducer from '../actions/chat.action';

const rootReducer = combineReducers({
    chats: chatReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
