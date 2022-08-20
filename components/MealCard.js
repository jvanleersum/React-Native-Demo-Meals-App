import { View, Image, Text, StyleSheet } from "react-native";

const MealCard = ({ imageUrl, title, duration, affordability, complexity }) => {
  return (
    <>
      <View style={styles.innerContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoItem}>{duration} min</Text>
        <Text style={styles.infoItem}>{affordability}</Text>
        <Text style={styles.infoItem}>{complexity}</Text>
      </View>
    </>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  innerContainer: {
    borderRadius: 6,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
  },
  infoItem: {
    fontSize: 12,
  },
});
