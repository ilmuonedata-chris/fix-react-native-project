// import * as t from './types';
// import * as api from '../config/api';
// import { auth, database } from "../config/firebase";

// import { AsyncStorage } from 'react-native';

// export function registerUser(data) {
//   return (dispatch) => new Promise(async (resolve, reject) => {

//     // update store with loading status
//     dispatch(checkingStatus());
//     try {
//       const registerApi = await auth.createUserWithEmailAndPassword(data.email, data.password);
//       dispatch(registerSuccess(registerApi));
//       await auth.onAuthStateChanged(async (user) => {
//         if(user) {
//           try {
//             // const sendEmail = await user.sendEmailVerification();
//             await database.ref('students/' + user.uid).set({
//               email: data.email,
//             }, function(error) {
//               if (error) {
//                 reject(error);
//               } else {
//                 // Data saved successfully!
//                 resolve(registerApi);
//               }
//             });
//           } catch (error) {
//             reject(error);
//           }
//         } else {
//           reject(user);
//         }
//       });
      
//     } catch (error) {
//       dispatch(authError(error));
//       reject(error);
//     }

//   });
// }

// export function loginUser(data) {
//   return (dispatch) => new Promise(async (resolve,reject) => {
//     dispatch(checkingStatus());

//     try {
//       const loginApi = await auth.signInWithEmailAndPassword(data.email, data.password);
//       const isVerified = loginApi.emailVerified;
//       const notVerified = {
//         err: 'email is not verified'
//       };
//       if(isVerified) {
//         dispatch(loginSuccess(loginApi));
//         resolve(loginApi);
//       } else {
//         reject(notVerified);
//       }
//     } catch (error) {
//       dispatch(authError(error));
//       reject(error);
//     }
//   });
// }

// export function logoutUser() {
//   return (dispatch) => new Promise(async (resolve, reject) => {
//     try {
//       const logoutApi = await auth.signOut();
//       dispatch(loggedOut());
//       resolve(logoutApi);
//     } catch (error) {
//       dispatch(authError(error));
//       reject(error);
//     }
//   });
// }

// // Actions Creators
// const checkingStatus = () => {
//   return {
//     type: t.IS_LOADING,
//   }
// }

// const registerSuccess = (userData) => {
//   return {
//     type: t.REGISTER_SUCCESS,
//     data: userData
//   }
// }

// const authError = (error) => {
//   return {
//     type: t.AUTH_ERROR,
//     response: error
//   }
// }

// const loginSuccess = (userData) => {
//   return {
//     type: t.LOGIN_SUCCESS,
//     data: userData
//   }
// }

// const loggedOut = () => {
//   return {
//     type: t.LOGGED_OUT,
//   }
// }