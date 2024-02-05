import { View, Text, StyleSheet, Image } from 'react-native';
import MealsList from '../components/mealsList/MealsList';
import { useSelector } from 'react-redux';
// import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

function FavoriteScreen() {
  // const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/no-search.jpg')}
          />
          <Text style={styles.text}>You have no favorite Meal</Text>
        </View>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 70,
  },
  image: {
    marginVertical: 20,
    width: 250,
    height: 250,
    borderRadius: 125,
  },
});
