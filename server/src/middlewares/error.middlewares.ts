import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "~/contants/httpStatus";

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  res.status(err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    message: err.message || "Internal Server Error"
  });
};

export default errorMiddleware;
