import axios from 'axios';
import appConfig from '../config.json';

const REQUEST_TIME_OUT = 10000;

const authInterceptor = (config) => {
    const configWithAuth = {
        ...config,
        headers: {
            'X-Api-Key': appConfig.GlassnodeKey,
            ...config.headers,
        },
        timeout: REQUEST_TIME_OUT,
    };

    return configWithAuth;
};

export const api = axios.create({ baseURL: appConfig.GlassnodeApiUrl });

api.interceptors.request.use(authInterceptor, error => Promise.reject(error));

export const getDifficultyLatest = (assetSymbol = 'BTC', frequencyInterval = '24h') => api.get(`/metrics/mining/difficulty_latest?a=${assetSymbol}&i=${frequencyInterval}`);

export const getHashRateMean = (assetSymbol = 'BTC', frequencyInterval = '24h') => api.get(`/metrics/mining/hash_rate_mean?a=${assetSymbol}&i=${frequencyInterval}`);

export const getPriceUsdClose = (assetSymbol = 'BTC', frequencyInterval = '24h') => api.get(`/metrics/market/price_usd_close?a=${assetSymbol}&i=${frequencyInterval}`);
