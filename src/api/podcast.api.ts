import baseApi from "./base.api";

export const getAllPodcasts = async () => {
    try {
        const response = await baseApi.get('/podcast/summarizations');
        return response.data;
    } catch (error) {
        console.error("Get all podcasts error:", error);
        throw error;
    }
}

export const getPodcastById = async (podcastId: string) => {
    try {
        const response = await baseApi.get(`/podcast/summarizations/${podcastId}`);
        return response.data;
    } catch (error) {
        console.error("Get podcast by ID error:", error);
        throw error;
    }
}