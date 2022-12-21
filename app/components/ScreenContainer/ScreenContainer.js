import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import BaseTemplate from "BaseComponents/BaseTemplate";
import Alert from "BaseComponents/Alert";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const ScreenContainer = ({ isScrollable = false, children }) => {
  const loading = useSelector((state) => state.loading);
  const notifications = useSelector((state) => state.notifications);

  return (
    <>
      <BaseTemplate>
        {notifications.length > 0 ? (
          <AppView zIndex={2}>
            <Alert />
          </AppView>
        ) : (
          ""
        )}
        {isScrollable ? <ScrollView>{children}</ScrollView> : children}
      </BaseTemplate>
    </>
  );
};

export default ScreenContainer;
