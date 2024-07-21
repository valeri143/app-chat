import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats, createNewChat, deleteExistingChat } from '@/app/core/chat-module/controlers/chat.controler';
import { RootState } from '@/app/core/chat-module/reducers/chat.reducer';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import { styles } from './home.styled';

const Home: React.FC = () => {
    const [chatName, setChatName] = useState('');
    const [searchQuery, setSearchQuery] = useState(''); 
    const chats = useSelector((state: RootState) => state.chats.chats);
    const error = useSelector((state: RootState) => state.chats.error);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const currentUserId = 'user1';

    useEffect(() => {
        dispatch(fetchChats());
    }, [dispatch]);

    const handleCreateChat = () => {
        dispatch(createNewChat(chatName, currentUserId));
        setChatName('');
    };

    const handleDeleteChat = (chatId: string, chatCreator: string) => {
        dispatch(deleteExistingChat(chatId, chatCreator));
    };

    const goToChat = (chatId: string, chatName: string) => {
        navigation.navigate('explore', { chatId, chatName });
    };

    const filteredChats = chats.filter(chat =>
    {
        if(!searchQuery){
            return chats;
        };
        return chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    }
    );


    return (
        <View style={styles.container}>
             {error && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Oops something went wrong you can reload the app</Text>
                </View>
            )}
            <TextInput
                placeholder="Search chats"
                value={searchQuery}
                onChangeText={setSearchQuery}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter chat name"
                value={chatName}
                onChangeText={setChatName}
                style={styles.input}
            />
            <Button title="Create Chat" onPress={handleCreateChat} />
            <FlatList
                data={filteredChats}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.chatItem}>
                        <Text style={styles.chatName} onPress={() => goToChat(item.id, item.name)}>{item.name}</Text>
                        <Button title="Delete" onPress={() => handleDeleteChat(item.id, item.creator)} />
                    </View>
                )}
            />
        </View>
    );
};

export default Home;
