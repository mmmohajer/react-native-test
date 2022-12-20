import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Button from "BaseComponents/Button";

import useApiCalls from "Hooks/useApiCalls";
import { loginUser } from "Utils/auth";
import { LOGIN_API_ROUTE } from "Constants/apiRoutes";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const LoginComponent = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  useEffect(() => {
    if (isAuthenticated?.authenticated) {
      navigate.navigate("Home");
    }
  }, [isAuthenticated]);

  const [sendLoginReq, setSendLoginReq] = useState(false);
  const bodyData = {
    email: email.toLowerCase(),
    password,
    keep_logged_in: keepLoggedIn,
  };
  const { data, error } = useApiCalls({
    sendReq: sendLoginReq,
    setSendReq: setSendLoginReq,
    method: "POST",
    url: LOGIN_API_ROUTE,
    bodyData,
  });

  useEffect(() => {
    if (data) {
      loginUser(data["access"], data["refresh"], dispatch);
    }
  }, [data]);

  return (
    <>
      <AppView>
        <AppText>LoginComponent</AppText>
        <Button
          btnText="Login"
          onPress={() => {
            setEmail("mohammadmohajer7091@gmail.com");
            setPassword("Mb3742870!?!");
            setSendLoginReq(true);
          }}
        />
      </AppView>
    </>
  );
};

export default LoginComponent;
