import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#CCCCCC", 
  },
  itemIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default styles;
