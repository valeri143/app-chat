import AsyncStorage from '@react-native-async-storage/async-storage';
import { hardcodedMessages } from '../constants/chat.constant';
import { Message } from '../types/chat.type';
import { Chat } from '../types/chat.type';

export const createChat = async (chatName: string, creator: string) => {
    const chats = await getChats();
    const newChat = { id: Date.now().toString(), name: chatName, creator, messages: [] };
    chats.push(newChat);
    await AsyncStorage.setItem('chats', JSON.stringify(chats));
    return newChat;
};

export const getChats = async () => {
    const storedChats = await AsyncStorage.getItem('chats');
    const chats = storedChats ? JSON.parse(storedChats) : [];
    const isHardcodedChatsStored = chats.some((chat: Chat) => chat.id === 'chat1' || chat.id === 'chat2');
    if (isHardcodedChatsStored) {
        return chats;
    }
    const hardcodedChats = [...chats, ...hardcodedMessages];
    return hardcodedChats;
};

export const deleteChat = async (chatId: string, userId: string) => {
    let chats = await getChats();
        if (userId === 'system') {
            window.alert('You do not have permission to delete this chat');
            return;
        }
    chats = chats.filter((chat: Chat) => chat.id !== chatId);
    await AsyncStorage.setItem('chats', JSON.stringify(chats));
    return chatId;
};

export const addMessageToChat = async (chatId: string, message: Message) => {
    const chats = await getChats();
    const chatIndex = chats.findIndex((chat: Chat) => chat.id === chatId);
    if (chatIndex === -1) {
        throw new Error(`Chat with ID ${chatId} does not exist`);
    }

    chats[chatIndex] = {
        ...chats[chatIndex],
        messages: [...chats[chatIndex].messages, message],
    };
    await AsyncStorage.setItem('chats', JSON.stringify(chats));
};