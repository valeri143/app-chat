export type Message = {
    id: string;
    text: string;
    user: string;
  };
  
 export type Chat = {
    id: string;
    name: string;
    creator: string; 
    messages: Message[];
  };

export type ChatState = {
    chats: Chat[];
    error: string | null;
}