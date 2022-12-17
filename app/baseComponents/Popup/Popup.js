import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AppModal from "BaseComponents/AppModal";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Popup = ({ isActive, setIsActive, children }) => {
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
          {children}
        </AppView>
      </AppModal>
    </>
  );
};

export default Popup;
