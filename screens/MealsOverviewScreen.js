import { View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = () => {
  return <View style={styles.container}>
    <Text>All the Meals</Text>
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