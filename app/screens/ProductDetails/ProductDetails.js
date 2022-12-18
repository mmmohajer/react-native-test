import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import ScreenContainer from "Components/ScreenContainer";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const ProductDetails = () => {
  const route = useRoute();

  const id = route.params.id;
  return (
    <>
      <ScreenContainer isScrollable={false}>
        <AppText>ProductDetails {id}</AppText>
      </ScreenContainer>
    </>
  );
};

export default ProductDetails;
