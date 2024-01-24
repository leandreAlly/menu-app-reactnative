import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTiles from '../components/CategoryGridTiles';

function renderCategories(itemData) {
  return (
    <CategoryGridTiles
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategories}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
