import { Metadata } from 'next';

import { SearchInput } from '@/components/shared';

export const metadata: Metadata = {
	title: 'Главная',
};

export default function Page() {
	return (
		<div
			className={'bg-neutral-900 min-h-screen rounded-t-4xl border-[0.5] p-4'}
		>
			<SearchInput />
		</div>
	);
}
