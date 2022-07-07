import { ActiveStatusEnum } from 'src/commom/enum/enum';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Event')
export class Event {
  @ObjectIdColumn()
  _id: string;

  @Column()
  nameEvent: string;

  @Column()
  dateEvent: Date;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  howToSee: string;

  @Column({
    type: 'enum',
    enum: ActiveStatusEnum,
    default: ActiveStatusEnum.ACTIVE,
  })
  status: ActiveStatusEnum;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @BeforeInsert()
  async beforeInsert() {
    this.status = ActiveStatusEnum.ACTIVE;
  }
}
