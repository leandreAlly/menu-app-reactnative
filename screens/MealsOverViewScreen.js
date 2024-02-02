import { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
// import { useRoute } from '@react-navigation/native'; // we can use this in case we don't need props
import MealItem from '../components/mealsList/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealsList from '../components/mealsList/MealsList';

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

  return <MealsList items={displayedMeals} />;
}

export default MealsOverViewScreen;
