import bcrypt from "bcrypt";
import { jwtToken } from "@/helpers/helper";
import { sendError, sendSuccess } from "@/helpers/responseSender";
import User from "@models/User";

const signUp = async (req: any, res: any) => {
  let { body } = req;
  let token: any, user: any, newData: any;
  try {
    body.password = bcrypt.hashSync(body.password, 10);
    // Create a user
    await User.create(body).then(async (response) => {
      newData = response.get();
      token = await jwtToken(newData.id);
      newData.authentication = token;
    });
    let response = {
      data: newData,
      message: "User registered.",
    };
    return sendSuccess(res, response);
  } catch (error) {
    return sendError(res, error.message);
  }
};

const signIn = async (req: any, res: any) => {
  try {
    let { body } = req;
    let token: any, user: any;
    user = await User.findOne({
      where: {
        email: body.email,
      },
      attributes: ["fullname", "email"],
      raw: true,
    });
    if (user !== null) {
      token = await jwtToken(user.id);
      user.authentication = token;
    } else {
      throw new Error("user dosen't exist.");
    }
    let response = {
      data: user,
      message: "User logined in..."
    };
    return sendSuccess(res, response);
  } catch (error) {
    return sendError(res, error.message);
  }
};

export { signUp, signIn };
