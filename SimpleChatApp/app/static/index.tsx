import { StyleSheet} from 'react-native';
import { ThemedText } from '@/app/shared/components/themed-text.component';
import { ThemedView } from '@/app/shared/components/themed-view.component';
import Home from '../shared/components/home/home.component';

export default function HomeScreen() {
  return (
      <ThemedView>
        <ThemedText style={styles.titleContainer} type="title">Welcome! It is Simple Chat App</ThemedText>
        <Home />
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16,
  },
});

