'use client';

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

	return (
		<Form {...form}>
			<form onSubmit={(e) => e.preventDefault()}>
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
			</form>
		</Form>
	);
}
