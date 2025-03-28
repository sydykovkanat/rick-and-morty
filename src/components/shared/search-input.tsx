'use client';

import { XIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form, FormField, Input } from '@/components/ui';

interface Fields {
	value: string;
}

export function SearchInput() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const queryParam = searchParams.get('query') ?? '';

	const form = useForm<Fields>({
		defaultValues: { value: queryParam },
	});

	useEffect(() => {
		form.setValue('value', queryParam);
	}, [queryParam, form]);

	const handleSearch = (value: string) => {
		const newQuery = value.trim();
		const path = newQuery ? `/?query=${newQuery}` : '/';
		router.replace(path);
	};

	const clearSearch = () => {
		form.setValue('value', '');
		router.replace('/');
	};

	return (
		<Form {...form}>
			<form onSubmit={(e) => e.preventDefault()} className={'relative'}>
				<FormField
					control={form.control}
					name='value'
					render={({ field }) => (
						<Input
							className={'rounded-xl'}
							type={'text'}
							placeholder={'Поиск...'}
							autoComplete={'off'}
							{...field}
							onChange={(e) => {
								field.onChange(e);
								handleSearch(e.target.value);
							}}
						/>
					)}
				/>
				{form.getValues('value') && (
					<button
						type={'button'}
						className={
							'absolute right-4 top-1/2 -translate-y-1/2 stroke-[1.5] text-muted-foreground'
						}
						onClick={clearSearch}
					>
						<XIcon />
					</button>
				)}
			</form>
		</Form>
	);
}
