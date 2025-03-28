export interface Character {
	id: number;
	name: string;
	image: string;
	status: CharacterStatus;
	species: CharacterSpecies;
	location: {
		name: string;
	};
}

export enum CharacterStatus {
	Alive = 'Alive',
	Dead = 'Dead',
	Unknown = 'unknown',
}

export enum CharacterSpecies {
	Human = 'Human',
	Humanoid = 'Humanoid',
	Alien = 'Alien',
	Animal = 'Animal',
	Robot = 'Robot',
	Other = 'Other',
}
