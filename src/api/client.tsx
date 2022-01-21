import axios from "axios";

export const client = axios.create({
  baseURL: "https://fsl-candidate-api-vvfym.ondigitalocean.app/v1",
});

export const GET_ADDRESS = "/address";
export const GET_ACTIVE_ADDRESS = (id: string) => `/address/${id}`;
export const SAVE_ADDRESS = "/address";

export const DELETE_ADDRESS = (id: string) => `/address/${id}`;
export const UPDATE_ADDRESS = (id: number) => `/address/${id}`;
