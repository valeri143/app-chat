// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import Chat from './chat.component';

// const mockStore = configureStore([]);
// const store = mockStore({
//   chats: {
//     chats: [
//       { id: '1', name: 'Chat 1', creator: 'user1', messages: [] },
//     ],
//     error: null,
//   },
// });

// const route = {
//   params: {
//     chatId: '1',
//     chatName: 'Chat 1',
//   }
// };

// describe('Chat', () => {
//   it('renders correctly', () => {
//     const { getByPlaceholderText, getByText } = render(
//       <Provider store={store}>
//         <Chat/>
//       </Provider>
//     );

//     expect(getByText('Chat 1')).toBeTruthy();
//     expect(getByPlaceholderText('Type a message')).toBeTruthy();
//     expect(getByText('Send')).toBeTruthy();
//   });

//   it('allows sending a message', () => {
//     const { getByPlaceholderText, getByText } = render(
//       <Provider store={store}>
//         <Chat />
//       </Provider>
//     );

//     fireEvent.changeText(getByPlaceholderText('Type a message'), 'Hello!');
//     fireEvent.press(getByText('Send'));
//   });
// });
