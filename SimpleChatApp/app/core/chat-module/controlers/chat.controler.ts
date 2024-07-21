import { addChat, removeChat, setError, setChats, addMessage } from "../actions/chat.action";
import { createChat, deleteChat, getChats, addMessageToChat } from "../services/chat.service";

export const fetchChats = () => async (dispatch: (arg0: { payload: any[]; type: "chats/setChats"; }) => void) => {
    const chats = await getChats();
    dispatch(setChats(chats));
};

export const createNewChat = (chatName: string, creator: string) => async (dispatch: (arg0: { payload: any; type: "chats/addChat" | "chats/setError"; }) => void) => {
    try {
        const newChat = await createChat(chatName, creator);
        dispatch(addChat(newChat));
    } catch (error: any) {
        dispatch(setError(error.message));
    }
};

export const deleteExistingChat = (chatId: string, userId: string) => async (dispatch: (arg0: { payload: string; type: "chats/setError" | "chats/removeChat"; }) => void) => {
    try {
        await deleteChat(chatId, userId);
        dispatch(removeChat(chatId));
    } catch (error: any) {
        dispatch(setError(error.message));
    }
};

export const sendMessage = (chatId: string, message: any) => async (dispatch: (arg0: { payload: string | { chatId: string; message: any; }; type: "chats/setError" | "chats/addMessage"; }) => void) => {
    try {
        await addMessageToChat(chatId, message);
        dispatch(addMessage({ chatId, message }));
    } catch (error : any) {
        dispatch(setError(error.message));
    }
};