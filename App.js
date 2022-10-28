import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import { isIOS, isAndroid, getDeviceDimensions } from "./app/utils/helpers";

import Icon from "./app/baseComponents/Icon";

import { styles, fontStyleFunc } from "./app/assets/styles";

export default function App() {
  console.log(useDimensions());
  console.log(useDeviceOrientation());
  return (
    <>
      <View
        style={{
          ...styles.bgYellow,
          ...styles.w100,
          ...styles.h100,
          ...styles.brTL50,
          ...styles.brTR20,
          ...styles.brBL10,
          ...styles.brBR0,
          ...styles.brTRed,
          ...styles.brRGreen,
          ...styles.brBPurple,
          ...styles.brLSilver,
          ...styles.brT2,
          ...styles.brB10,
          ...styles.brL15,
          ...styles.brR5,
          ...styles.shType1,
          ...styles.sh50,
          ...styles.pT1,
          ...styles.pL1,
          ...styles.pB2,
          ...styles.pR2,
          ...styles.mT8,
          ...styles.mL20,
          ...curStyles.test,
        }}
      >
        <Text
          style={{
            ...styles.textRed,
            fontWeight: "normal",
            ...fontStyleFunc({
              isBold: true,
              color: "green",
              isCenterAlign: true,
              isItalic: true,
              isCapitalize: true,
            }),
          }}
        >
          Hello {isIOS() && "IOS"} {isAndroid() && "android"}
        </Text>
        {getDeviceDimensions()?.window?.width >= 400 && <Text>Yes!!!</Text>}
        <StatusBar style="auto" />
      </View>
      <View
        style={{
          ...styles.bgRed,
          ...styles["flex_0.5"],
          ...styles.jc_center,
          ...styles.align_item_center,
        }}
      >
        <View style={{ ...styles.flex_dir_row, ...styles.bgWhite }}>
          <View
            style={{
              ...styles.align_item_center,
              ...styles.jc_center,
            }}
          >
            <Text>Me</Text>
          </View>
          <Icon name="email" size={50} />
        </View>
      </View>
    </>
  );
}

const curStyles = StyleSheet.create({
  test: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "auto",
    flexWrap: "nowrap",
    flexDirection: "column-reverse",
  },
});
