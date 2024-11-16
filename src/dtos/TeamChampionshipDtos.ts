export type TeamChampionshipDto = {
	id: number;
	teamId: number;
	championshipId: number;
	year: number;
};

export type CreateTeamChampionshipDto = {
	teamId: number;
	championshipId: number;
	year: number;
};
