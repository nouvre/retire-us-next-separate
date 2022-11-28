import axios from "axios";

export const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/`;

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});
