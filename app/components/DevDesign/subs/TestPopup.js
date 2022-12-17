import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Button from "BaseComponents/Button";
import Popup from "BaseComponents/Popup";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const EmptyForCopy = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Button btnText="Show Popup" onPress={() => setIsActive(!isActive)} />
      <Popup isActive={isActive} setIsActive={setIsActive}>
        <AppView
          heightInPercentage={100}
          isFullWidth
          isCentralizedInX1Dir={true}
          isCentralizedInX2Dir={true}
          style={{
            position: "absolute",
          }}
        >
          <Button btnText="Close Popup" onPress={() => setIsActive(false)} />
        </AppView>
      </Popup>
    </>
  );
};

export default EmptyForCopy;
