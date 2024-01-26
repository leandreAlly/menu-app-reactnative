import { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
// import { useRoute } from '@react-navigation/native'; // we can use this in case we don't need props
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

function MealsOverViewScreen({ route, navigation }) {
  // const route = useRoute();
  // const { categoryId } = route.params;
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(categoryId);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
      headerBackTitleVisible: false,
    });
  }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const MealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...MealItemProps} />;
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
