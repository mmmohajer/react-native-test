import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Alert = () => {
  return (
    <>
      <AppView>
        <AppText>Alert</AppText>
      </AppView>
    </>
  );
};

export default Alert;
