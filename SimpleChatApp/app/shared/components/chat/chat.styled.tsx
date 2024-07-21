import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
    chatName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    messageList: {
        flex: 1,
        marginBottom: 10,
    },
    messageItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    messageUser: {
        fontWeight: 'bold',
    },
    messageText: {
        marginTop: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 5,
        marginBottom: 10,
    },
});