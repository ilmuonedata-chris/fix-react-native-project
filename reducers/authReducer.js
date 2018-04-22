import { AsyncStorage } from 'react-native';

import * as t from '../actions/types';

const initialState = { 
  isLoggedIn: false, 
  user: null 
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGGED_IN:
      const user = action.data;

      // Save token and data to Asyncstorage
      AsyncStorage.multiSet([
          ['user', JSON.stringify(user)]
      ]);

      state = Object.assign({}, state, { isLoggedIn: true, user: user });
      console.log('state: ', state);
      return state;
      
    default:
      return state;
  }
};

export default authReducer;