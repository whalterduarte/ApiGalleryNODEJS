
import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../services/db'

export interface PhotoConfig extends Model {
  id:number,
  descripition: string,
  photo: string
}

export const Photo = sequelize.define<PhotoConfig>('Photos',{
  id:{
    primaryKey: true,
    autoIncrement: true,
    type:DataTypes.INTEGER.UNSIGNED
  },
  photo:{
    type:DataTypes.STRING,
    allowNull: false
  },
  description:{
    type:DataTypes.STRING,
    allowNull: false
  }
},{
  tableName: 'gallery',
  timestamps: false
})