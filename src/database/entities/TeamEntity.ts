import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { City } from '.';

@Entity('team')
export class Team {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 255, nullable: false })
	name: string;

	@Column({ type: 'integer', name: 'foundation_year' })
	foundationYear: number;

	@Column({ type: 'integer', name: 'city_id' })
	cityId: number;

	@ManyToOne(
		() => City,
		(city) => city.teams,
	)
	@JoinColumn({ name: 'city_id' })
	city: City;
}
