import axios from "axios";
import { API_URL } from "../utils/constapiroutes";
import { products, products_payload } from "../types/products.types";
import { GetToken } from "../utils/localstorage";

export const get_products_list = async () => {
  const { data } = await axios.get<products[]>(API_URL + "products", {
    headers: { Authorization: "Bearer " + GetToken() },
  });
  return data;
};

export const search_products = async (values: products_payload) => {
  const { data } = await axios.post<products>(
    API_URL + "products/search",values,{ 
      headers: { Authorization: "Bearer " + GetToken() }, }
  );
  return data;
};

export const create_products = async (values: products) => {
  const { data } = await axios.post<string>(API_URL + "products", values,{
    headers: { Authorization: "Bearer " + GetToken() },
  });
  return data;
};
export const update_products = async (id: number, values: products) => {
  const { data } = await axios.put<string>(API_URL + "products" + id, values, {
    headers: {
      Authorization: "Bearer " + GetToken(),
    },
  });
  return data;
};
export const delete_products = async (id: number) => {
  const { data } = await axios.delete<string>(API_URL + "products" + id, {
    headers: {
      Authorization: "Bearer " + GetToken(),
    },
  });
  return data;
};
