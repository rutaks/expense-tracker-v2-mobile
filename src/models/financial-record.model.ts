import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm/browser';
import FinancialRecordType from '../enums/financial-record-type.enum';

@Entity()
export default class FinancialRecord {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({nullable: true})
  description: string;

  @Column('decimal', {scale: 2})
  amount: number;

  @Column('text')
  type: FinancialRecordType;

  @Column()
  occurredOn: Date;

  constructor(data?: {
    description?: string;
    amount?: number;
    type?: FinancialRecordType;
    occurredOn?: Date;
  }) {
    this.amount = data?.amount;
    this.description = data?.description;
    this.type = data?.type;
    this.occurredOn = data?.occurredOn;
  }
}
