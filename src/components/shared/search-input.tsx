'use client';

import { XIcon } from 'lucide-react';
import { Control, UseFormSetValue } from 'react-hook-form';

import { FormField, Input } from '@/components/ui';

import { FiltersValues } from '@/hooks/use-filters';

interface Props {
	control: Control<FiltersValues>;
	setValue: UseFormSetValue<FiltersValues>;
}

export function SearchInput({ control, setValue }: Props) {
	return (
		<div className='relative'>
			<FormField
				control={control}
				name='name'
				render={({ field }) => (
					<Input
						{...field}
						className='rounded-xl pr-10'
						placeholder='Search characters...'
						autoComplete='off'
						onChange={(e) => {
							field.onChange(e);
						}}
					/>
				)}
			/>
			{control._formValues.name && (
				<button
					type='button'
					className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground'
					onClick={() => setValue('name', '')}
				>
					<XIcon className='h-4 w-4' />
				</button>
			)}
		</div>
	);
}
