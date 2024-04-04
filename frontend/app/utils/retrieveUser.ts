import {
  LOCAL_STORAGE_KEY,
  LOCAL_STORAGE_KEY_TOKEN,
  USER_SECRET_KEY,
} from "../config/config";

var CryptoJS = require("crypto-js");

export const retrieveUser = () => {
  try {
    const setedUserInfo = localStorage.getItem(LOCAL_STORAGE_KEY);
    const decryptUserInfo = CryptoJS.AES.decrypt(
      setedUserInfo,
      USER_SECRET_KEY
    );
    var decryptUserInfox = decryptUserInfo.toString(CryptoJS.enc.Utf8);
    const userInfo = JSON.parse(decryptUserInfox);
    if (userInfo) {
      return userInfo;
    }
  } catch (e) {
    return {};
  }
};

export const clearLocalStorage = () => {
  try {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  } catch (e) {
    return null;
  }
};

export const isLoggedIn = () => {
  const user = retrieveUser();

  const token = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN);

  if (user?.email && token) {
    return true;
  } else {
    return null;
  }
};

export const logOut = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  localStorage.removeItem(LOCAL_STORAGE_KEY_TOKEN);
  localStorage.removeItem("userEmail");

  window.location.reload();
};
