import baseApi from "./base.api";
import { User } from "../types/user";


export const UserInfo = async (userId: string) => {
    try {
        const response = await baseApi.get<User>(`/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error("User info error:", error);
        throw error;
    }
}

export const getAllPodcasts = async () => {
    try {
        const response = await baseApi.get('/podcast/summarizations');
        return response.data;
    } catch (error) {
        console.error("Get all podcasts error:", error);
        throw error;
    }
}