import { View, Text, StyleSheet, Image } from 'react-native';

function FavoriteScreen() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Food</Text>
      </View>
      {/* <View style={styles.cardContainer}>
        <View>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
            }}
            style={styles.cardImage}
          />
        </View>
        <View>
          <Text>Favorite Meal</Text>
          <Text>MiniTitle</Text>
          <Text>rating</Text>
          <Text>price</Text>
        </View>
      </View> */}
    </View>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: 350,
    height: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8f4814',
    borderRadius: 45,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  cardContainer: {
    backgroundColor: '#e4a578',
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
