import { View, Text } from 'react-native';

function MealDetailsScreen({ route }) {
  const { mealId } = route.params;

  return (
    <View>
      <Text>MealDetailsScreen - {mealId}</Text>
    </View>
  );
}

export default MealDetailsScreen;
