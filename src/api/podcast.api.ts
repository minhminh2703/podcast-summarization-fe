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

export const summarizePodcast = async (url: string, target_language: 'English' | 'Vietnamese') => {
    try {
        const response = await baseApi.post(
            '/podcast/summarize',
            {
                URL: url,
                target_language: target_language,
            },
            {
                headers: {
                    'Accept': '*/*',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
                timeout: 600000,
            }
        );
        return response.data;
    } catch (error) {
        console.error('Summarize podcast error:', error);
        throw error;
    }
};
  