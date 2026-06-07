import ApiError from "../utils/ApiError.js";

const errorMiddleware = (err, req, res, next) => {

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Prisma unique constraint
  if (err.code === 'P2002') {
    return res.status(409).json({
      success: false,
      message: 'A record with this value already exists',
    });
  }

  // Prisma record not found
  if (err.code === 'P2025') {
    return res.status(404).json({
      success: false,
      message: 'Record not found',
    });
  }

  console.error(err);
  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};

export default errorMiddleware;