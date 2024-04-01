// models/User.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '@config/init';

interface UserAttributes {
  id: number;
  fullname: string;
  email: string;
  password: string;
}

// interface UserCreationAttributes extends Omit<UserAttributes, 'id'> {}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public fullname!: string;
  public email!: string;
  public password!: string;
}

User.init(
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
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;
