import Storage from './storage';
import {
  AUTH_TOKEN,
  CUSTOMER_ID,
  EMAIL,
  FIRST_NAME,
  IS_LOGGED_IN,
  LAST_NAME,
  MOBILE_NUMBER,
  REFRESH_TOKEN
} from '../constants/user-constants';

class User {
  isAuthenticated = () => {
    const userToken = this.getUserToken();
    if (!userToken || userToken === '{}') {
      return false;
    }
    return true;
  };
  getUserToken = () => Storage.get(AUTH_TOKEN);

  getCustomerId = () => Storage.get(CUSTOMER_ID);

  signOut = async () => {
    Storage.delete(AUTH_TOKEN);
    Storage.delete(EMAIL);
    Storage.delete(FIRST_NAME);
    Storage.delete(LAST_NAME);
    Storage.delete(REFRESH_TOKEN);
    Storage.delete(CUSTOMER_ID);
    Storage.delete(MOBILE_NUMBER);
    Storage.delete(IS_LOGGED_IN);
  };

  forceLogout = () => {
    this.signOut()
      .then(() => {
        if (window.location.pathname !== '/') {
          window.location.href = '/login';
        }
      })
      .catch(() => {
        console.log('Error logging out user');
      });
  };
}

export default User;
