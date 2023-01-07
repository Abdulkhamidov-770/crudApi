import axios from "axios";

axios.defaults.baseURL = "https://task.samid.uz/v1";
const headers = { 
    'Authorization': 'Bearer -o1ttthpmiAe1pdgZGlwRV5twH4AZGEdICNFD5Xt9HjqIQdiDUTdLcQ3_rw6Qn85',
};
export const getApi = async () => axios.get(`/task`, {headers});
export const signInApi = async (data) => axios.post("/user/sign-in", data);
export const getApiById = async (id) => axios.get(`/task${id}`);
export const createApi = async (data) => axios.post(`/task`, data, {headers});
export const updateApi = async (data) => axios.put(`/task/${data.id}`, data, {headers});
export const deleteApi = async (id) => axios.delete(`/task/${id}`, {headers});
