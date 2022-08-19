import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

const CategoryTile = ({ title, color }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable android_ripple={{color: 'white'}} style={({pressed}) => [styles.button, pressed && styles.pressedItem]}>
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
        <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryTile;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    width: 150,
    height: 150,
    margin: 16,
    borderRadius: 6,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    overflow: Platform.OS === 'android' ? "hidden" : "visible"
  },
  button: {
    flex: 1
  },
  pressedItem: {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 16,
    borderRadius: 6,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  }
});
