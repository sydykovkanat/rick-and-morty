import { Skeleton } from '@/components/ui/skeleton';

export function CharacterSkeletons() {
	return (
		<div className={'flex flex-col gap-y-3'}>
			{Array.from({ length: 6 }).map((_, index) => (
				<Skeleton
					key={index}
					className={
						'w-full h-[74px] rounded-3xl border p-3 flex items-center gap-x-3'
					}
				>
					<Skeleton className={'border rounded-full size-[48px]'} />

					<div>
						<Skeleton className={'w-40 h-5 rounded mb-2 border'} />
						<Skeleton className={'w-20 h-4 rounded border'} />
					</div>
				</Skeleton>
			))}
		</div>
	);
}
