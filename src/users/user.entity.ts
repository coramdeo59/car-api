import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterRemove, AfterUpdate } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    password: string;

    @AfterInsert()
    logInsert() {
        console.log('inserted User with id', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Remove User with id', this.id)
    }
     
    @AfterRemove()
    logRemove() {
        console.log('Remove User with id', this.id)
     }
    
}