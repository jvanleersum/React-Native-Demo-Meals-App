import { View, Text, StyleSheet, Pressable } from "react-native";

const CategoryTile = ({ title, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable android_ripple={{color: 'white'}} style={({pressed}) => {pressed && styles.pressedItem}}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
    padding: 8,
    borderRadius: 6,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  pressedItem: {
    opacity: 0.5
  },
  title: {
    fontWeight: "bold",
  },

});
