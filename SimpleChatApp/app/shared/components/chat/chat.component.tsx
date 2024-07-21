import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats, sendMessage } from '@/app/core/chat-module/controlers/chat.controler';
import { RootState } from '@/app/core/chat-module/reducers/chat.reducer';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { styles } from './chat.styled';

const Chat: React.FC = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { chatId = '', chatName = '' } = route.params as { chatId: string; chatName: string; };
    const [newMessage, setNewMessage] = useState('');
    const messages = useSelector((state: RootState) => {
        if (chatId === undefined || chatId === '' || chatName === undefined || chatName === '') {
            return;
        }
        const chat = state.chats.chats.find(chat => chat.id === chatId);
        return chat ? chat.messages : [];
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchChats());
    }, [dispatch]);

    const handleSendMessage = () => {
        const message = { id: Date.now().toString(), text: newMessage, user: 'You' };
        dispatch(sendMessage(chatId, message));
        setNewMessage('');
    };

    return (
        <View style={styles.container}>
            {chatId !== undefined && chatId !== '' && chatName !== undefined && chatName !== '' ? (
                <>
                <Text style={styles.chatName}>{chatName}</Text>
                <FlatList
                    data={messages}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.messageItem}>
                        <Text style={styles.messageUser}>{item.user}:</Text>
                        <Text style={styles.messageText}>{item.text}</Text>
                    </View>
                    )}
                    style={styles.messageList}
                />
                <TextInput
                    placeholder="Type a message"
                    value={newMessage}
                    onChangeText={setNewMessage}
                    style={styles.input}
                />
                <Button title="Send" onPress={handleSendMessage} />
                </>
            ): <Text>Chat was not found</Text>}
        </View>
    );
};

export default Chat;
