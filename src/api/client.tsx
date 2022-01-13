import axios from "axios";

export const client = axios.create({
  baseURL: "https://fsl-candidate-api-vvfym.ondigitalocean.app/v1",
});

export const GET_ADDRESS = "/address";
export const SAVE_ADDRESS = "/address";

export const DELETE_ADDRESS = (id: string) => `/address/${id}`;
