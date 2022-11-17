import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AppImage from "BaseComponents/AppImage";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestImage = () => {
  return (
    <>
      <AppImage
        isFromUri={true}
        src={"https://picsum.photos/id/237/200/300"}
        width={200}
        height={200}
        imageProps={{ blurRadius: 1, borderRadius: 15 }}
        isCentralizedInX1Dir={true}
        isCentralizedInX2Dir={true}
        brRad={10}
      />

      <AppImage
        isFromUri={false}
        src={require("Images/general/icon.png")}
        width={200}
        height={200}
        // widthInSize={200}
        // heightInSize={200}
        imageProps={{ blurRadius: 1, borderRadius: 15 }}
        isCentralizedInX1Dir={true}
        isCentralizedInX2Dir={true}
        brRad={10}
        brColor="red"
        marginT={1}
      />
    </>
  );
};

export default TestImage;
