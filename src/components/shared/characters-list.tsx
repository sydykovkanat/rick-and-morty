import { CharacterCard } from '@/components/shared';

import { Character } from '@/shared/types/character.interface';

interface Props {
	characters: Character[];
}

export function CharactersList({ characters }: Props) {
	return (
		<section className={'flex flex-col gap-y-3'}>
			{characters.map((character) => (
				<CharacterCard character={character} key={character.id} />
			))}
		</section>
	);
}
