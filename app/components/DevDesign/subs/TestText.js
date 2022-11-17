import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { isIOS, isAndroid, getDeviceDimensions } from "Utils/helpers";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestText = () => {
  return (
    <>
      <AppText
        textProps={{
          color: "red",
          isBold: true,
          lineHeight: 20,
          isCenterAlign: true,
        }}
      >
        Hello {isIOS() && "IOS"} {isAndroid() && "android"}
      </AppText>
      <AppText>
        Normal Text{" "}
        {getDeviceDimensions()?.window?.width >= 400 && <Text>Yes!!!</Text>}
      </AppText>
    </>
  );
};

export default TestText;
