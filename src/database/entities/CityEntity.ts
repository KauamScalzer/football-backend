import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Team } from '.';

@Entity('city')
export class City {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 255, nullable: false })
	name: string;

	@OneToMany(
		() => Team,
		(team) => team.city,
	)
	teams: Team[];
}
