import { View, Text, Image, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealDetailsScreen({ route }) {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>{selectedMeal.title}</Text>
      <View></View>
      <Text>Ingredients</Text>

      <Text>Steps</Text>
    </View>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});
