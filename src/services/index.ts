// export const SERVER_URL = `https://${import.meta.env.VITE_API_HOST}`;

export const SERVER_URL = 'https://api.sample.com'

const path = (url: string) => {
  return SERVER_URL.concat('/api/').concat(url).concat('/');
};

export const getApiPath = (path: string) => {
  SERVER_URL.concat('/api/').concat(path).concat('/');
};

export const getMediaPath = (route: string) => {
  return SERVER_URL.concat(route);
};

const API_ENDPOINTS = {
  auth: {
    login: path('login'),
  },
  user: {
    profile: path(`user-profiles`),
    update: (id: string) => path(`users/${id}`),
  },
};

export default API_ENDPOINTS;
