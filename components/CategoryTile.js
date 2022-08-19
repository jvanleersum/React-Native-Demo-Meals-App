import { View, Text, StyleSheet } from 'react-native';

const CategoryTile = ({ title, color }) => {
  return <View style={[styles.container, {backgroundColor: color}]}>
    <Text style={styles.title}>{title}</Text>
  </View>
};

export default CategoryTile;

const styles = StyleSheet.create({
  container: {
   width: 150, 
   height: 150,
   justifyContent: 'center',
   alignItems: 'center',
   margin: 8,
   padding: 8,
   borderRadius: 6,
   elevation: 4,
   shadowColor: "black",
   shadowOffset: {width: 0, height: 0},
   shadowOpacity: 0.25,
   shadowRadius: 3
  },
  title: {
    fontWeight: 'bold'
  }
});