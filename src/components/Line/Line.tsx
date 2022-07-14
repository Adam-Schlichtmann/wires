import { Text } from "react-native";
import { Animated } from "react-native";
import {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

type Props = {
  color: string;
  end: [number, number];
  start: [number, number];
};

const size = 100;

const Line = ({ color, end, start }: Props) => {
  // const one = useSharedValue(Math.floor(Math.random() * size));
  // const two = useSharedValue(Math.floor(Math.random() * size));
  // const three = useSharedValue(Math.floor(Math.random() * size));
  // const four = useSharedValue(Math.floor(Math.random() * size));

  // const d = useDerivedValue(() => {
  //   return `M ${start[0]} ${start[1]} C ${one.value} ${two.value}, ${three.value} ${four.value}, ${end[0]} ${end[1]}`;
  // }, [one.value, two.value, three.value, four.value]);
  // console.log(one.value, two.value, three.value, four.value);

  const path = useAnimatedProps(() => ({
    d: `M ${start[0]} ${start[1]} C ${Math.floor(
      Math.random() * size
    )} ${Math.floor(Math.random() * size)}, ${Math.floor(
      Math.random() * size
    )} ${Math.floor(Math.random() * size)}, ${end[0]} ${end[1]}`,
  }));
  return (
    <AnimatedPath
      onPress={() => {
        console.log("animating");
        path.value = withTiming(
          `M ${start[0]} ${start[1]} C ${Math.floor(
            Math.random() * size
          )} ${Math.floor(Math.random() * size)}, ${Math.floor(
            Math.random() * size
          )} ${Math.floor(Math.random() * size)}, ${end[0]} ${end[1]}`
        );
        // one.value = withSpring(Math.floor(Math.random() * size));
        // two.value = withSpring(Math.floor(Math.random() * size));
        // three.value = withSpring(Math.floor(Math.random() * size));
        // four.value = withSpring(Math.floor(Math.random() * size));
      }}
      stroke={color}
      strokeWidth='2'
      fill='transparent'
      {...path}
    />
  );
};

export default Line;
