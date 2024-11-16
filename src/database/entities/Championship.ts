import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('championship')
export class Championship {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 255, nullable: false })
	name: string;
}
