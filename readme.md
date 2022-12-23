npm -g expo-cli
expo init .
Copy/Replace All the files into the created directory
Remove assets folder from the root folder
expo install expo-secure-store
expo install expo-image-picker
expo install @react-native-community/netinfo
expo install expo-notifications
npm i react-native-community/hooks
npm i react-native-gesture-handler
npm i @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm i @reduxjs/toolkit
npm i react-redux
To support both portrait and landscape mode in app.json file change:
orientation: "portrait" ==> orientation: "default"
npm start

If you get an error to get expo notification token, you need to login to expo in
your terminal, so you must run the following command in the terminal:
expo login
Also, be sure to use real device

cmd+d ==> Open developer menu in ios simulator
cmd+m ==> Open developer menu in android simulator
cmd+right/left
