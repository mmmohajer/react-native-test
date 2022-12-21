import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Button from "BaseComponents/Button";
import LoginComponent from "BaseComponents/LoginComponent";
import LogoutComponent from "BaseComponents/LogoutComponent";
import ScreenContainer from "Components/ScreenContainer";
import DevDesign from "Components/DevDesign";

import { TEST } from "Env";
import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Home = () => {
  const navigation = useNavigation();

  const language = useSelector((state) => state.language);

  return (
    <>
      <ScreenContainer isScrollable={false}>
        <AppText>Home {language}</AppText>
        <Button
          btnText="See Products"
          onPress={() => navigation.navigate("ProductStack")}
        />
        <AppView padding={2} brThickness={2} margin={1} brColor="gray">
          <LoginComponent />
        </AppView>
        <LogoutComponent />
        {/* <DevDesign /> */}
      </ScreenContainer>
    </>
  );
};

export default Home;
