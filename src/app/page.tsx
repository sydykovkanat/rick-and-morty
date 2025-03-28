import { redirect } from 'next/navigation';

import {
	CharactersList,
	CharactersPagination,
	SearchInput,
} from '@/components/shared';

import { characterService } from '@/services/character.service';

interface Params {
	query?: string;
	page?: string;
}

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<Params>;
}) {
	const params = await searchParams;
	const query = params.query || '';
	const currentPage = Number(params.page) || 1;

	const { results, info } = await characterService.getAll(query, currentPage);

	if (results.length === 0 && currentPage > 1) {
		redirect(`/?query=${query}&page=1`);
	}

	return (
		<div className='bg-neutral-900 min-h-screen rounded-t-4xl border-x-[0.5] border-t-[0.5]'>
			<div className='p-4 border-b-[0.5]'>
				<SearchInput />
			</div>

			<div className='p-4'>
				<CharactersList characters={results} />

				{info.pages > 1 && (
					<CharactersPagination
						currentPage={currentPage}
						totalPages={info.pages}
						query={query}
					/>
				)}
			</div>
		</div>
	);
}
