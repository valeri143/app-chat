// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import Home from './home.component';

// const mockStore = configureStore([]);
// const store = mockStore({
//   chats: {
//     chats: [
//       { id: '1', name: 'Chat 1', creator: 'user1', messages: [] },
//       { id: '2', name: 'Chat 2', creator: 'user2', messages: [] },
//     ],
//     error: null,
//   },
// });

// describe('Home', () => {
//   it('renders correctly', () => {
//     const { getByPlaceholderText, getByText } = render(
//       <Provider store={store}>
//         <Home />
//       </Provider>
//     );

//     expect(getByPlaceholderText('Search chats')).toBeTruthy();
//     expect(getByPlaceholderText('Enter chat name')).toBeTruthy();
//     expect(getByText('Create Chat')).toBeTruthy();
//     expect(getByText('Chat 1')).toBeTruthy();
//     expect(getByText('Chat 2')).toBeTruthy();
//   });

//   it('allows creating a new chat', () => {
//     const { getByPlaceholderText, getByText } = render(
//       <Provider store={store}>
//         <Home />
//       </Provider>
//     );

//     fireEvent.changeText(getByPlaceholderText('Enter chat name'), 'New Chat');
//     fireEvent.press(getByText('Create Chat'));

//   });

//   it('filters chats based on search query', () => {
//     const { getByPlaceholderText, queryByText } = render(
//       <Provider store={store}>
//         <Home />
//       </Provider>
//     );

//     fireEvent.changeText(getByPlaceholderText('Search chats'), 'Chat 1');
//     expect(queryByText('Chat 1')).toBeTruthy();
//     expect(queryByText('Chat 2')).toBeNull();
//   });
// });
