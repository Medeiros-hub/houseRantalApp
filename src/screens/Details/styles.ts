import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  swiperContent: {
    flexDirection: "row",
    width: "100%",
    height: 340,
  },
  headerContent: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: Colors.gray.medium,
  },
  rating: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 9,
    color: Colors.gray.medium,
  },
  price: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    color: Colors.black,
  },
  description: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    color: Colors.gray.light,
    lineHeight: 20,
    marginTop: 20,
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 20,
  },
});
