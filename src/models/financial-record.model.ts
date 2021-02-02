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
}
