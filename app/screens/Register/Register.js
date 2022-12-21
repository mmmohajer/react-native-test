import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AppTouchable from "BaseComponents/AppTouchable";
import ScreenContainer from "Components/ScreenContainer";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Register = () => {
  const navigate = useNavigation();

  return (
    <>
      <ScreenContainer isScrollable={false}>
        <AppView padding={2} margin={2} brThickness={2}>
          <AppTouchable
            margin={2}
            isCentralizedInX1Dir
            isCentralizedInX2Dir
            bgColor="red"
            padding={2}
            touchableProps={{ onPress: () => navigate.navigate("Login") }}
          >
            <AppText
              textProps={{
                color: "white",
                isBold: true,
                lineHeight: 20,
                isCenterAlign: true,
              }}
            >
              Login
            </AppText>
          </AppTouchable>
        </AppView>
      </ScreenContainer>
    </>
  );
};

export default Register;