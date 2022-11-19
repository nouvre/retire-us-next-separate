import axios from "./api";
export const get_file = (url:string) => {
    return axios.post("get_file", {url}).then(({ data }) => {
        return data.data;
    });
};
