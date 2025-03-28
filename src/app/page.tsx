import { Metadata } from 'next';

import { SearchInput } from '@/components/shared';

import { characterService } from '@/services/character.service';

export const metadata: Metadata = {
	title: 'Главная',
};

export default async function Page({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const charactes = await characterService.getAll(searchParams.query ?? '');

	console.log(charactes.results);

	return (
		<div
			className={'bg-neutral-900 min-h-screen rounded-t-4xl border-[0.5] p-4'}
		>
			<SearchInput />
		</div>
	);
}
