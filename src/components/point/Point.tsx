import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    height: 10,
    width: 10,
    position: "absolute",
    top: -5,
    right: 50,
    zIndex: 1,
  },
});

type Props = {
  color: string;
};

const Point = ({ color }: Props) => {
  return <View style={[styles.container, { backgroundColor: color }]} />;
};

export default Point;
