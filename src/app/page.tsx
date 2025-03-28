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
	const currentPage = Number(params.page) || 1;

	const { results, info } = await characterService.getAll(
		currentPage,
		params.name || '',
		params.status || '',
		params.gender || '',
	);

	if (results.length === 0 && currentPage > 1) {
		const redirectParams = new URLSearchParams({
			...params,
			page: '1',
		});
		redirect(`/?${redirectParams.toString()}`);
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
					/>
				)}
			</div>
		</div>
	);
}
