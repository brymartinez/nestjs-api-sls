import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryColumn()
  id: string;
  @Column()
  type: 'LIMIT | MARKET';
  @Column({ nullable: true })
  price?: string;
  @Column()
  side: 'BUY' | 'SELL';
  @Column()
  ticker: string;
  @Column()
  quantity: string;
  @Column()
  exchange: string;
  @CreateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'NOW()',
  })
  createdAt: Date;
  @UpdateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'NOW()',
  })
  updatedAt: Date;
}
