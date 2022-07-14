import { StyleSheet, View } from "react-native";
import { Path } from "react-native-svg";

import Square from "../square";
import { Point } from "../../../types";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    // flex: 1,
    flexDirection: "row",
  },
});

const Board = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Square
          lines={[
            {
              start: Point.BottomLeft,
              end: Point.TopRight,
              color: "cyan",
            },
          ]}
        />
        <Square
          lines={[
            {
              start: Point.BottomLeft,
              end: Point.RightMiddle,
              color: "cyan",
            },
          ]}
        />
        <Square
          lines={[
            {
              start: Point.BottomRight,
              end: Point.TopMiddle,
              color: "cyan",
            },
          ]}
        />
      </View>
      <View style={styles.row}>
        <Square
          lines={[
            {
              start: Point.TopMiddle,
              end: Point.BottomMiddle,
              color: "cyan",
            },
          ]}
        />
        <Square
          lines={[
            {
              start: Point.BottomRight,
              end: Point.TopLeft,
              color: "cyan",
            },
          ]}
        />
        <Square
          lines={[
            {
              start: Point.TopMiddle,
              end: Point.MiddleLeft,
              color: "cyan",
            },
          ]}
        />
      </View>
      <View style={styles.row}>
        <Square
          lines={[
            {
              start: Point.MiddleLeft,
              end: Point.BottomRight,
              color: "cyan",
            },
          ]}
        />
        <Square
          lines={[
            {
              start: Point.MiddleLeft,
              end: Point.RightMiddle,
              color: "cyan",
            },
            {
              start: Point.TopMiddle,
              end: Point.BottomLeft,
              color: "cyan",
            },
          ]}
        />
        <Square
          lines={[
            {
              start: Point.TopLeft,
              end: Point.BottomMiddle,
              color: "cyan",
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Board;
