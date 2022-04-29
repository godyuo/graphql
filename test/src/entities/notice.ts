import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { User } from './user';

@Entity()
export class Notice extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    title: string;

    @Column()
    content: string;

    @ManyToOne(() => User, (user) => user.email, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    @JoinColumn({ name: 'user_email'})
    user: User;
}