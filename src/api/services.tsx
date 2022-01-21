import { Address } from "../utils/modules";
import {
  client,
  DELETE_ADDRESS,
  GET_ACTIVE_ADDRESS,
  GET_ADDRESS,
  SAVE_ADDRESS,
  UPDATE_ADDRESS,
} from "./client";

export const getAddressesService = async (search: string) => {
  const response = await client.get(
    `${
      search.length > 0
        ? GET_ADDRESS + `?name=${search}&orderBy=id&direction=desc`
        : GET_ADDRESS
    }`
  );
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

export const updateAddressService = async (data: Address, id: number) => {
  const response = await client.patch(UPDATE_ADDRESS(id), { ...data });
  return response.data;
};
export const getActiveAddressService = async (id: string) => {
  const response = await client.get(GET_ACTIVE_ADDRESS(id));
  return response.data;
};
