import * as t from './types';
import * as api from '../config/api';
import { auth } from "../config/firebase";

import { AsyncStorage } from 'react-native';

export function registerUser(data, successCB, errorCB) {
  return (dispatch) => {
    api.register(data, function (success, data, error) {
      if (success) successCB(data);
      else if (error) errorCB(error)
    });
  };
}