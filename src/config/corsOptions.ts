import { CorsOptions } from "cors";
import CustomError from "./CustomError";

export const allowedOrigins = ["http://localhost:5173"];

export let corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if ( allowedOrigins.indexOf(origin) !== -1 || (process.env.NODE_ENV === "development" && !origin)) {
      callback(null, true);
    } else {
      callback(new CustomError("Not allowed by CORS", 401));
    }
  },
  optionsSuccessStatus: 200,
};
