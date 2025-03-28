import { PropsWithChildren } from 'react';

import { cn } from '@/utils/clsx';

interface Props extends PropsWithChildren {
	className?: string;
}

export function Container({ className, children }: Props) {
	return (
		<div className={cn('max-w-[640px] mx-auto min-[540px]:px-4', className)}>
			{children}
		</div>
	);
}
