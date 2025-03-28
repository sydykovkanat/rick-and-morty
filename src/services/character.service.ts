import { api } from '@/api/api';

import { Character } from '@/shared/types/character.interface';
import { Response } from '@/shared/types/response.interface';

class CharacterService {
	async getAll(query?: string, page?: number) {
		try {
			const { data } = await api<Response<Character>>({
				method: 'GET',
				url: '/character',
				params: {
					name: query,
					page,
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
