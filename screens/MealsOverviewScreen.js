import { View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;

  return <View style={styles.container}>
    <Text>All the Meals from {categoryId}</Text>
  </View>
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  }
})