import { Metadata } from 'next';

import { CharactersList, SearchInput } from '@/components/shared';

import { characterService } from '@/services/character.service';

interface Params {
	searchParams: Promise<{
		query: string;
	}>;
}

export const metadata: Metadata = {
	title: 'Главная',
};

export default async function Page({ searchParams }: Params) {
	const { results } = await characterService.getAll((await searchParams).query);

	return (
		<div
			className={
				'bg-neutral-900 min-h-screen rounded-t-4xl border-x-[0.5] border-t-[0.5]'
			}
		>
			<div className={'p-4 border-b-[0.5]'}>
				<SearchInput />
			</div>

			<div className={'p-4'}>
				<CharactersList characters={results} />
			</div>
		</div>
	);
}
