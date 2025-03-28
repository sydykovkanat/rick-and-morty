import Link from 'next/link';

import { Button } from '@/components/ui';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	query?: string;
}

export function CharactersPagination({
	currentPage,
	totalPages,
	query,
}: PaginationProps) {
	const hasPrev = currentPage > 1;
	const hasNext = currentPage < totalPages;

	return (
		<div className='flex gap-2 justify-center mt-4'>
			{hasPrev && (
				<Link
					href={{
						pathname: '/',
						query: {
							...(query && { query }),
							page: currentPage - 1,
						},
					}}
				>
					<Button variant='outline'>Previous</Button>
				</Link>
			)}

			<span className='flex items-center px-4 text-sm text-muted-foreground'>
				Page {currentPage} of {totalPages || 1}
			</span>

			{hasNext && (
				<Link
					href={{
						pathname: '/',
						query: {
							...(query && { query }),
							page: currentPage + 1,
						},
					}}
				>
					<Button variant='outline'>Next</Button>
				</Link>
			)}
		</div>
	);
}
