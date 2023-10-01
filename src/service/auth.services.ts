
import { loginpayload, user_data } from '../types/auth.types';
import axios from "axios";
import { API_URL } from "../utils/constapiroutes";
export const make_login = async (values: loginpayload) => {
  const {data} = await axios.post<JSON>(API_URL + "Login", values);
  return data;
};

export const create_user = async (values: user_data) => {
  const { data } = await axios.post<string>(
    API_URL + "Crear_Usuario", values)
  return data;
};