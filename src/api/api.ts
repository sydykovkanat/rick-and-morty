import axios, { type CreateAxiosDefaults } from 'axios';

import { API_URL } from '@/constants/api.constants';

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
};

export const api = axios.create(options);
