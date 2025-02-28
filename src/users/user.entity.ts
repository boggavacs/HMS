import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

}