import baseApi from "./base.api";
import { User } from "../types/user";

export const Login = async (email: string, password: string) => {
    try {
        const response = await baseApi.post<User>("/auth/login", {
            email,
            password,
        });

        if (response.data.access_token) {
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("user_id", response.data.userid || "");
        }
        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

export const Register = async (email: string, password: string) => {
    try {
        const response = await baseApi.post<User>("/auth/signup", {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
}

