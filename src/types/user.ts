export interface User {
    id: string;
    email: string;
    profile_picture?: string;
    access_token?: string;
    userid?: string;
}

export interface UserState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
}

export const defaultUser: User | null = null;