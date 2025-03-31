'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
}

export function CharactersPagination({
	currentPage,
	totalPages,
}: PaginationProps) {
	const searchParams = useSearchParams();
	const hasPrev = currentPage > 1;
	const hasNext = currentPage < totalPages;

	const createQueryString = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('page', page.toString());
		return params.toString();
	};

	if (totalPages <= 1) return null;

	return (
		<div className='flex gap-2 justify-center mt-4'>
			{hasPrev && (
				<Link href={`/?${createQueryString(currentPage - 1)}`}>
					<Button variant='outline'>Previous</Button>
				</Link>
			)}
			<span className='flex items-center px-4 text-sm text-muted-foreground'>
				Page {currentPage} of {totalPages}
			</span>
			{hasNext && (
				<Link href={`/?${createQueryString(currentPage + 1)}`}>
					<Button variant='outline'>Next</Button>
				</Link>
			)}
		</div>
	);
}
