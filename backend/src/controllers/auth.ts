import jwt from "jsonwebtoken";
import User from '@models/User';

// const signIn = (req: any, res: any) => {};

const signUp = async (req: any, res: any) => {
  let { body } = req;
  try {
    // Create a user
    const user = await User.create(body);
    console.log('User created:', user.toJSON());
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

let userController = {
  signUp
}

export { signUp };
