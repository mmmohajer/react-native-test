import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AppModal from "BaseComponents/AppModal";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const AlertContainer = ({ children }) => {
  const notifications = useSelector((state) => state.notifications);

  return (
    <>
      <AppModal
        isTransparent
        isActive={notifications?.length > 0}
        animationType="none"
      >
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
            isFullWidth
            style={{
              position: "absolute",
            }}
          >
            {children}
          </AppView>
        </AppView>
      </AppModal>
    </>
  );
};

export default AlertContainer;
