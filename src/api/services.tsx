import { Address } from "../utils/modules";
import { client, DELETE_ADDRESS, GET_ADDRESS, SAVE_ADDRESS } from "./client";

export const getAddressesService = async () => {
  const response = await client.get(GET_ADDRESS);
  return response.data;
};

export const deleteAddressService = async (id: string) => {
  const response = await client.delete(DELETE_ADDRESS(id));
  return response.data;
};

export const saveAddressService = async (data: Address) => {
  const response = await client.post(SAVE_ADDRESS, { ...data });
  return response.data;
};
