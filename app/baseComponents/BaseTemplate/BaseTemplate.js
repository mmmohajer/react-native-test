import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { isAndroid } from "Utils/helpers";
import { getStoreData, setStoreData, removeStoreData } from "Utils/auth";
import { authenticated, notAuthenticated } from "Services/auth";
import { getProfile } from "Services/profile";
import useApiCalls from "Hooks/useApiCalls";
import { ACCESS_TOKEN_CHEANGE_TIME } from "Constants/vars";
import {
  REFRESH_TOKEN_API_ROUTE,
  MY_PROFILE_API_ROUTE,
  AUTHENTICATE_USER_API_ROUTE,
} from "Constants/apiRoutes";

import Loading from "BaseComponents/Loading";
import Alert from "BaseComponents/Alert";
import Modal from "BaseComponents/AppModal";

import { localStyles } from "./localStyles";

const BaseTemplate = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const notifications = useSelector((state) => state.notifications);

  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [sendGetCurUserReq, setSendGetCurUserReq] = useState(false);
  const [sendAuthenticatedReq, setSendAuthenticatedReq] = useState(false);
  const [sendrefreshTokenReq, setSendRefreshTokenReq] = useState(false);
  const [sendRepeatedrefreshTokenReq, setSendRepeatedRefreshTokenReq] =
    useState(false);

  const retrieveToken = async () => {
    const localRefreshToken = await getStoreData("refresh_token");
    if (localRefreshToken) {
      setRefreshToken(localRefreshToken);
    } else {
      await removeStoreData("access_token");
      await removeStoreData("refresh_token");
      notAuthenticated(dispatch);
    }
  };

  const updateToken = async (localAccessToken) => {
    await setStoreData("access_token", localAccessToken);
  };

  const removeTokens = async () => {
    await removeStoreData("access_token");
    await removeStoreData("refresh_token");
  };

  const authenticateUser = async () => {
    const localAccessToken = await getStoreData("access_token");
    const localRefreshToken = await getStoreData("refresh_token");
    setAccessToken(localAccessToken);
    setRefreshToken(localRefreshToken);
    try {
      setSendGetCurUserReq(true);
      setInterval(() => {
        setSendRepeatedRefreshTokenReq(true);
        setTimeout(() => {
          setSendRepeatedRefreshTokenReq(false);
        }, 1000);
      }, ACCESS_TOKEN_CHEANGE_TIME);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    retrieveToken();
  }, []);

  const { data: refreshData, error: refreshError } = useApiCalls({
    sendReq: sendrefreshTokenReq,
    setSendReq: setSendRefreshTokenReq,
    method: "POST",
    url: REFRESH_TOKEN_API_ROUTE,
    bodyData: { refresh: refreshToken },
    showLoading: true,
    closeLoading: false,
    showErrorMessage: false,
  });

  const { data: repeatedRefreshData, error: repeatedRefreshError } =
    useApiCalls({
      sendReq: sendRepeatedrefreshTokenReq,
      setSendReq: setSendRepeatedRefreshTokenReq,
      method: "POST",
      url: REFRESH_TOKEN_API_ROUTE,
      bodyData: { refresh: refreshToken },
      showLoading: false,
      showErrorMessage: false,
    });

  const { data: authenticatedData, error: authenticatedError } = useApiCalls({
    sendReq: sendAuthenticatedReq,
    setSendReq: setSendAuthenticatedReq,
    method: "GET",
    url: AUTHENTICATE_USER_API_ROUTE,
    showLoading: true,
    closeLoading: false,
    showErrorMessage: false,
  });

  const { data: profileData, error: profileError } = useApiCalls({
    sendReq: sendGetCurUserReq,
    setSendReq: setSendGetCurUserReq,
    method: "GET",
    url: MY_PROFILE_API_ROUTE,
    showLoading: true,
    showErrorMessage: false,
  });

  useEffect(() => {
    if (refreshToken) {
      setSendRefreshTokenReq(true);
    }
  }, [refreshToken]);

  useEffect(() => {
    if (refreshData) {
      updateToken(refreshData["access"]);
      setAccessToken(refreshData["access"]);
    }
  }, [refreshData]);

  useEffect(() => {
    if (repeatedRefreshData) {
      updateToken(repeatedRefreshData["access"]);
    }
  }, [repeatedRefreshData]);

  useEffect(() => {
    if (refreshError?.data) {
      removeTokens();
    }
  }, [refreshError]);

  useEffect(() => {
    if (accessToken && !isAuthenticated?.authenticated) {
      setSendAuthenticatedReq(true);
    }
  }, [accessToken]);

  useEffect(() => {
    if (authenticatedData) {
      if (authenticatedData?.Authenticated) {
        authenticated(dispatch);
      } else {
        notAuthenticated(dispatch);
        removeTokens();
      }
    }
  }, [authenticatedData]);

  useEffect(() => {
    if (authenticatedError?.data) {
      notAuthenticated(dispatch);
      removeTokens();
    }
  }, [authenticatedError]);

  useEffect(() => {
    if (isAuthenticated?.authenticated) {
      authenticateUser();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (profileData) {
      getProfile(dispatch, profileData);
    }
  }, [profileData]);

  return (
    <>
      <SafeAreaView
        style={{ paddingTop: isAndroid() && StatusBar.currentHeight }}
      >
        {loading && <Loading />}
        {/* {!loading && notifications.length > 0 ? <Alert /> : ""} */}
        {/* <Modal /> */}
        {children}
      </SafeAreaView>
    </>
  );
};

export default BaseTemplate;
