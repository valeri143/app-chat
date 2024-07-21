import { StyleSheet} from 'react-native';
import { ThemedText } from '@/app/shared/components/themed-text.component';
import { ThemedView } from '@/app/shared/components/themed-view.component';
import Chat from '../shared/components/chat/chat.component';

export default function TabTwoScreen() {
  return (
      <>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Chat Page</ThemedText>
      </ThemedView>
      <Chat />
      </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16,
  },
});
