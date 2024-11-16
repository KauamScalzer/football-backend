import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('city')
export class City {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 255, nullable: false })
	name: string;
}
