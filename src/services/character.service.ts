import { api } from '@/api/api';

import { Character } from '@/shared/types/character.interface';
import { Response } from '@/shared/types/response.interface';

class CharacterService {
	async getAll(query?: string) {
		try {
			const { data } = await api<Response<Character>>({
				method: 'GET',
				url: `/character${query ? `?name=${query}` : ''}`,
			});

			return data;
		} catch (err) {
			console.log(err);

			return {
				info: {
					count: 0,
					next: null,
					prev: null,
				},
				results: [],
			};
		}
	}
}

export const characterService = new CharacterService();
