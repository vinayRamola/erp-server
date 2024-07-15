import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      let decodedData;
      if (token) {
        decodedData = jwt.verify(token, "sEcReT");
        req.userId = decodedData?.id;
      }
    }
    next();
  } catch (error) {
    console.log(error);
    next(error); 
  }
};

export default auth;
