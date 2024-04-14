import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movies {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id: number;

    @Column({
        unique: true
    })
    titulo: string;

    @Column()
    diretor: string;

    @Column()
    anoLançamento: number;

    @Column()
    genero: string;
}