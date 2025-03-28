import { XIcon } from 'lucide-react';
import Link from 'next/link';

import { CharacterCard } from '@/components/shared';
import { Button } from '@/components/ui';

import { Character } from '@/shared/types/character.interface';

interface Props {
	characters: Character[];
}

export function CharactersList({ characters }: Props) {
	return (
		<section className={'flex flex-col gap-y-3'}>
			{characters.length === 0 ? (
				<div
					className={
						'text-muted-foreground absolute top-1/2 left-1/2 text-sm -translate-x-1/2 -translate-y-1/2 text-center space-y-1'
					}
				>
					<p>No characters found. Try to change the filters :)</p>

					<Link href={'/'}>
						<Button size={'sm'} variant={'outline'}>
							<XIcon />
							Clear filters
						</Button>
					</Link>
				</div>
			) : (
				characters.map((character) => (
					<CharacterCard character={character} key={character.id} />
				))
			)}
		</section>
	);
}
