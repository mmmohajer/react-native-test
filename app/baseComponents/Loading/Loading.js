import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AppModal from "BaseComponents/AppModal";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Loading = ({ isActive, setIsActive }) => {
  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  }, [isActive]);
  return (
    <>
      <AppModal isTransparent isActive={isActive} animationType="none">
        <AppView>
          <AppView
            bgColor="gray"
            isFullWidth={true}
            heightInPercentage={100}
            isCentralizedInX1Dir={true}
            isCentralizedInX2Dir={true}
            opacity={0.8}
          ></AppView>
          <AppView
            heightInPercentage={100}
            isFullWidth
            isCentralizedInX1Dir={true}
            isCentralizedInX2Dir={true}
            style={{
              position: "absolute",
            }}
          >
            <AppText
              padding={2}
              bgColor="red"
              brRad={5}
              brThickness={1}
              textProps={{ color: "white", isBold: true }}
            >
              Loading ...
            </AppText>
          </AppView>
        </AppView>
      </AppModal>
    </>
  );
};

export default Loading;
