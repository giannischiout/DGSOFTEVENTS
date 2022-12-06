// import React, { useContext, useEffect } from "react";
// import { UserContext } from "../context/context";
// import * as SecureStore from 'expo-secure-store';

// export const useSecureStore = (activate) => {
//   const { username, setUsername, password, setPassword } = useContext(UserContext);
//   async function secureLoginCred() {
//     await SecureStore.setItemAsync('loginUser', username);
//     await SecureStore.setItemAsync('loginPass', password);
//   }

//   async function getValueFor() {
//     let usernameCred = await SecureStore.getItemAsync('loginUser');
//     let passwordCred = await SecureStore.getItemAsync('loginPass');
//     if (usernameCred && passwordCred) {
//       // alert("🔐 Here's your value 🔐 \n" + usernameCred + " " + passwordCred);
//       setUsername(usernameCred)
//       setPassword(passwordCred)
//     } else {
//       console.log('No values stored under that key.');
//     }
//   }

//   async function deleteStorage() {
//     await SecureStore.deleteItemAsync('loginUser')
//     await SecureStore.deleteItemAsync('loginPass')
//     setUsername('');
//     setPassword('');
//   }

//   useEffect(() => {
//     getValueFor()
//   }, [activate])

//   return { secureLoginCred, deleteStorage }
// }

