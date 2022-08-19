import { View, Text, StyleSheet, Pressable, Image } from "react-native";

const MealsTile = ({ title, imageUrl, affordability, complexity, duration }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable android_ripple={{color: 'white'}} style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoItem}>{duration} min</Text>
          <Text style={styles.infoItem}>{affordability}</Text>
          <Text style={styles.infoItem}>{complexity}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealsTile;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 16, 
    backgroundColor: "white",
    borderRadius: 6,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 6,
    overflow: 'hidden'
  },
  pressed: {
    opacity: 0.5
  },
  image: { 
    width: "100%", 
    height: 200 
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18, 
    textAlign: 'center',
    margin: 8
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8
  },
  infoItem: {
    fontSize: 12
  }
});
