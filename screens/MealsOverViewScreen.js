import { Text, View, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealsOverViewScreen() {
  return (
    <View style={styles.screen}>
      <Text>Meal Overview Screen</Text>
    </View>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
