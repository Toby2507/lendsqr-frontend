import { userInterface } from "./interfaces";

export const setLocal = (key: string, data: userInterface) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocal = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};