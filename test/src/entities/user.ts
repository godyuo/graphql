import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Notice } from './notice';

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    name: string;

    @Column({ unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    phoneNum: string;

    @OneToMany(() => Notice, (notice) => notice.userId)
    notice_write: Notice[];
}