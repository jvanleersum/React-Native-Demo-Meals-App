import { View, Text, StyleSheet } from "react-native";

const List = ({ items }) => {
  return (
    <View style={styles.list}>
      {items.map((item) => (
        <View key={item} style={styles.listItem}>
          <Text >{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    marginVertical: 4,
  },
  listItem: {
    borderRadius: 6, 
    borderWidth: 1,
    borderColor: 'black',
    margin: 2, 
    padding: 4
  }
});
