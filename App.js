import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import Routes from "Routes";
import { store } from "Store";

import ScreenContainer from "Components/ScreenContainer";
import DevDesign from "Components/DevDesign";

import { styles } from "Styles";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
