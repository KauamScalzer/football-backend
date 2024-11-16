import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { Team } from './TeamEntity';
import { Championship } from './ChampionshipEntity';

@Entity('team_championship')
export class TeamChampionship {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'integer', name: 'team_id', nullable: false })
	teamId: number;

	@Column({ type: 'integer', name: 'championship_id', nullable: false })
	championshipId: number;

	@Column({ type: 'integer', nullable: false })
	year: number;

	@ManyToOne(
		() => Team,
		(team) => team.id,
		{ nullable: false },
	)
	@JoinColumn({ name: 'team_id' })
	team: Team;

	@ManyToOne(
		() => Championship,
		(championship) => championship.id,
		{ nullable: false },
	)
	@JoinColumn({ name: 'championship_id' })
	championship: Championship;
}
