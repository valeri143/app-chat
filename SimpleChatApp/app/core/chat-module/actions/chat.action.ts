import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat, ChatState } from '../types/chat.type';

const initialState: ChatState = {
    chats: [],
    error: null,
}

const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setChats(state, action: PayloadAction<Chat[]>) {
            state.chats = action.payload;
        },
        addChat(state, action: PayloadAction<Chat>) {
            const chatExists = state.chats.some(chat => chat.id === action.payload.id);
            if (!chatExists) {
                state.chats.push(action.payload);
            }
        },
        removeChat(state, action: PayloadAction<string>) {
              state.chats.filter(chat => chat.id !== action.payload);
        },
        addMessage(state, action: PayloadAction<{ chatId: string, message: any }>) {
            const chat = state.chats.find(chat => chat.id === action.payload.chatId);
            if (chat) {
                chat.messages.push(action.payload.message);
            }
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    }
});

export const { setChats, addChat, removeChat, addMessage, setError } = chatSlice.actions;
export default chatSlice.reducer;
