import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export interface FiltersValues {
	name: string;
	status: string;
	gender: string;
}

const getParam = (params: URLSearchParams, key: string): string => {
	const value = params.get(key);
	return value === 'null' ? '' : value || '';
};

export function useFilters() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const defaultValues = {
		name: getParam(searchParams, 'name'),
		status: getParam(searchParams, 'status'),
		gender: getParam(searchParams, 'gender'),
	};

	const form = useForm<FiltersValues>({ defaultValues });

	useEffect(() => {
		const subscription = form.watch((values) => {
			const newParams = new URLSearchParams(searchParams.toString());

			Object.entries(values).forEach(([key, value]) => {
				if (value && value !== 'null') {
					newParams.set(key, value);
				} else {
					newParams.delete(key);
				}
			});

			router.replace(`/?${newParams.toString()}`, { scroll: false });
		});

		return () => subscription.unsubscribe();
	}, [form, router, searchParams]);

	useEffect(() => {
		form.reset({
			name: getParam(searchParams, 'name'),
			status: getParam(searchParams, 'status'),
			gender: getParam(searchParams, 'gender'),
		});
	}, [searchParams, form]);

	return form;
}
