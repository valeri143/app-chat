import { Chat } from "../types/chat.type";

export const hardcodedMessages: Chat[] = [
    {
      id: 'chat1',
      name: 'Chat 1',
      creator : 'system',
      messages: [
        { id: '1', text: 'Hi!', user: 'User1' },
        { id: '2', text: 'How are u?', user: 'User2' },
      ],
    },
    {
      id: 'chat2',
      name: 'Chat 2',
      creator : 'system',
      messages: [
        { id: '1', text: 'Heyyy!', user: 'User3' },
        { id: '2', text: 'What`s up?', user: 'User4' },
      ],
    },
  ];