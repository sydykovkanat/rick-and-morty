import { api } from '@/api/api';

import { Character } from '@/shared/types/character.interface';
import { Response } from '@/shared/types/response.interface';

class CharacterService {
	async getAll(page?: number, name?: string, status?: string, gender?: string) {
		try {
			const { data } = await api<Response<Character>>({
				method: 'GET',
				url: '/character',
				params: {
					name,
					page,
					status,
					gender,
				},
			});

			return data;
		} catch {
			return {
				info: {
					count: 0,
					next: null,
					prev: null,
					pages: 0,
				},
				results: [],
			};
		}
	}
}

export const characterService = new CharacterService();
