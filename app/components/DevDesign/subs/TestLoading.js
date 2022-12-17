import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Loading from "BaseComponents/Loading";
import Button from "BaseComponents/Button";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestLoading = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Button btnText="Show Loading" onPress={() => setIsActive(!isActive)} />
      <Loading isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default TestLoading;
