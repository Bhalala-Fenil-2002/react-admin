import * as jwt from "jsonwebtoken";

const jwtToken = (id:any) => {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
    algorithm: "HS256",
  });  
  return token;
}

export { jwtToken };
