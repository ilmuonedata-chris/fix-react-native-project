import { auth, database } from './firebase';

export const register = (data, callback) => {
  const { email, password } = data;
  auth.createUserWithEmailAndPassword(email, password)
    .then((user) => callback(true, user, null))
    .catch((error) => callback(false, null, error));
}