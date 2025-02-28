import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Reports {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: string;
};

export { Reports };