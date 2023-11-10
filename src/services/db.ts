import { Sequelize } from "sequelize";
require('dotenv').config()


export const sequelize = new Sequelize (
  process.env.MYSQL_DB as string,
  process.env.MYSQL_USER as string,
  process.env.MYSQL_PASSWORD as string,
  {
    dialect:'mysql',
    port: parseInt(process.env.MYSQL_PORT as string)})
    try{
      console.log('Connect BD success')
    }catch(err){console.log('ERROR BD :' + err)}
 
  
 