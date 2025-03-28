'use client';

import { GenderSelect, SearchInput, StatusSelect } from '@/components/shared';

import { useFilters } from '@/hooks/use-filters';

export function Filters() {
	const { control, setValue } = useFilters();

	return (
		<div className='p-4 border-b space-y-2'>
			<SearchInput control={control} setValue={setValue} />

			<div className='flex items-center gap-x-2'>
				<StatusSelect control={control} />
				<GenderSelect control={control} />
			</div>
		</div>
	);
}
