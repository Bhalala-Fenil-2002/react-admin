// models/User.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '@config/init';

interface AdminAttributes {
  id: number;
  fullname: string;
  email: string;
  password: string;
  is_superadmin: number;
}

class Admin extends Model<AdminAttributes> implements AdminAttributes {
  public id!: number;
  public fullname!: string;
  public email!: string;
  public password!: string;
  public is_superadmin!: number;
}

Admin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_superadmin: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    modelName: 'Admin',
  }
);

export default Admin;
