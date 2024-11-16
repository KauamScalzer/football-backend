export type TeamDto = {
	id: number;
	name: string;
	cityId: number;
	foundationYear: number;
};

export type CreateTeamDto = {
	name: string;
	cityId: number;
	foundationYear: number;
};
