import Image from 'next/image';

import { Character } from '@/shared/types/character.interface';

interface Props {
	character: Character;
}

export function CharacterCard({ character }: Props) {
	return (
		<div
			className={
				'p-3 bg-neutral-800 rounded-3xl border flex items-center gap-x-3'
			}
		>
			<Image
				className={'rounded-full border'}
				src={character.image}
				alt={character.name}
				width={48}
				height={48}
				priority
			/>

			<div className={'leading-none'}>
				<div className={'flex items-center gap-3 leading-none'}>
					<h3>{character.name}</h3>

					<span className={'bg-neutral-700 rounded-full size-2 text-center'} />

					<div className={'text-sm text-muted-foreground flex gap-x-1'}>
						<span className={'first-letter:uppercase'}>{character.status}</span>

						<span>-</span>

						<span className={'first-letter:uppercase'}>
							{character.species}
						</span>
					</div>
				</div>

				<p className={'text-muted-foreground text-sm'}>
					{character.location.name}
				</p>
			</div>
		</div>
	);
}
