import { redirect } from 'next/navigation';

import {
	CharactersList,
	CharactersPagination,
	Filters,
} from '@/components/shared';

import { characterService } from '@/services/character.service';

interface Params {
	name?: string;
	page?: string;
	status?: string;
	gender?: string;
}

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<Params>;
}) {
	const params = await searchParams;
	const name = params.name || '';
	const currentPage = Number(params.page) || 1;
	const status = params.status || '';
	const gender = params.gender || '';

	const { results, info } = await characterService.getAll(
		currentPage,
		name,
		status,
		gender,
	);

	if (results.length === 0 && currentPage > 1) {
		redirect(`/?name=${name}&page=1`);
	}

	return (
		<div className='bg-neutral-900 min-h-screen rounded-t-4xl border-x-[0.5] border-t-[0.5]'>
			<Filters />

			<div className='p-4'>
				<CharactersList characters={results} />

				{info.pages > 1 && (
					<CharactersPagination
						currentPage={currentPage}
						totalPages={info.pages}
						query={name}
					/>
				)}
			</div>
		</div>
	);
}
