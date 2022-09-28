import { Table, Column, Model, AutoIncrement, PrimaryKey } from "sequelize-typescript";


@Table
export class Note extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  category: string;

  @Column
  content: string;

  @Column
  dates: string;

  @Column({ defaultValue: false })
  isArchive: boolean;
}