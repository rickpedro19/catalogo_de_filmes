import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id!: number;

    @Column()
    nome!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;
}
