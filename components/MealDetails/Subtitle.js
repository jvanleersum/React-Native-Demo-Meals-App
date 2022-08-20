import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({title}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitleContainer: {
    padding: 8,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginHorizontal: 50,
    marginVertical: 4,
  },
})