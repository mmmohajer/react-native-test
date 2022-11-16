import { View, Text, ScrollView, FlatList } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { useState } from "react";

import { isIOS, isAndroid, getDeviceDimensions } from "Utils/helpers";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import AppImage from "BaseComponents/AppImage";
import Button from "BaseComponents/Button";
import Icon from "BaseComponents/Icon";

import { styles, fontStyleFunc } from "Styles";

import { LIST_OF_ITEMS } from "./constants";
import ListCard from "./subs/ListCard";
import ListSeparator from "./subs/ListSeparator";
import { localStyles } from "./localStyles";

const Test = () => {
  const [refreshing, setRefreshing] = useState(false);
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  return (
    <>
      {/* <AppView
        bgColor="yellow"
        widthInSize={200}
        heightInSize={200}
        brRadTL={50}
        brRadTR={20}
        brRadBL={10}
        brRadBr={0}
        brColorT="red"
        brColorR="green"
        brColorB="purple"
        brColorL="silver"
        brThicknessT={2}
        brThicknessB={10}
        brThicknessL={15}
        brThicknessR={5}
        paddingT={2}
        paddingB={2}
        paddingL={2}
        paddingR={2}
        // marginT={8}
        marginB={4}
        marginL={5}
        style={{ ...styles.shType1, ...styles.sh50, ...localStyles.test }}
      >
        <AppText color="red" isBold lineHeight={20} isCenterAlign>
          Hello {isIOS() && "IOS"} {isAndroid() && "android"}
        </AppText>
        <AppText>
          Normal Text{" "}
          {getDeviceDimensions()?.window?.width >= 400 && <Text>Yes!!!</Text>}
        </AppText>
        <Icon name="email" size={50} />
      </AppView>
      <Button
        btnText={"submit"}
        iconType="email"
        onPress={() => console.log("Hello")}
        onLongPress={() => console.log("Bye")}
        marginL={4}
        style={{ ...styles.h80 }}
      /> */}

      <FlatList
        data={LIST_OF_ITEMS}
        keyExtractor={(item) => item.id}
        // numColumns={3}
        renderItem={({ item }) => (
          <ListCard
            title={item.title}
            content={item.content}
            image={item.image}
            onPress={() => console.log(item.id)}
            onLongPress={() => console.log("Hello")}
          />
        )}
        ItemSeparatorComponent={() => <ListSeparator />}
        refreshing={refreshing}
        onRefresh={() => console.log("Hello")}
      />
      <AppView></AppView>
    </>
  );
};

export default Test;
