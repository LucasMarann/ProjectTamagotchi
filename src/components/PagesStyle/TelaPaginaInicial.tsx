import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF3E0", 
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userIcon: {
    fontSize: 30,
    color: "#A30000", 
  },
  userMenu: {
    backgroundColor: "#F1EAD6", 
    padding: 10,
    borderRadius: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A237E", 
  },
  logoutButton: {
    fontSize: 16,
    color: "#1A237E", 
  },
});

export default styles;
