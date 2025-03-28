'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { Form, FormField, Input } from '@/components/ui';

interface Fields {
	value: string;
}

export function SearchInput() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const defaultValue = searchParams.get('query') ?? '';

	const form = useForm<Fields>({
		defaultValues: {
			value: defaultValue ?? '',
		},
	});

	const onChange = (value: string) => {
		if (value) {
			form.setValue('value', value);

			router.replace('/?query=' + value);
		} else {
			form.setValue('value', '');

			router.replace('/');
		}
	};

	const onSubmit = (data: Fields) => {
		console.log(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name={'value'}
					render={({ field }) => (
						<Input
							className={'rounded-xl'}
							type={'text'}
							placeholder={'Поиск...'}
							autoComplete={'off'}
							{...field}
							onChange={(e) => onChange(e.target.value)}
						/>
					)}
				/>
			</form>
		</Form>
	);
}
