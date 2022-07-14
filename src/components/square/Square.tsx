import { StyleSheet } from "react-native";
import { Svg } from "react-native-svg";

import { Point } from "../../../types";
import Line from "../Line";

const styles = StyleSheet.create({
  box: {
    backgroundColor: "pink",
    flex: 1,
  },
});

/**
 * Pattern for a box
 *         2
 * 1  ___ ___ ___   3
 *   |   |   |   |
 * 8 |   |   |   | 4
 *   |___|___|___|
 *  7      6      5
 * 1 = 0,0
 * 2 = 50,0
 * 3 = 100,0
 * 4 = 100,50
 * 5 = 100,100
 * 6 = 50,100
 * 7 = 0,100
 * 8 = 0,50
 *
 */

type Props = {
  lines: { start: Point; end: Point; color: string }[];
};

const getPoint = (p: Point): [number, number] => {
  if (p === Point.TopLeft) return [0, 0];
  if (p === Point.TopMiddle) return [50, 0];
  if (p === Point.TopRight) return [100, 0];
  if (p === Point.RightMiddle) return [100, 50];
  if (p === Point.BottomRight) return [100, 100];
  if (p === Point.BottomMiddle) return [50, 100];
  if (p === Point.BottomLeft) return [0, 100];
  return [0, 50];
};

const size = 100;

const Square = ({ lines }: Props) => {
  console.log("lines", lines);
  return (
    <Svg height={`${size}`} width={`${size}`} style={styles.box}>
      {lines.map((line) => (
        <Line
          key={`${line.start}-${line.end}-${line.color}`}
          start={getPoint(line.start)}
          end={getPoint(line.end)}
          color={line.color}
        />
      ))}
    </Svg>
  );
};

export default Square;
