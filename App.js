import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { Notifications } from "expo";

import Routes from "Routes";
import { store } from "Store";

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
