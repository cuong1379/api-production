const jwt = require("jsonwebtoken");

const authenticate = (request, response, next) => {
  const token = request.headers.authorization.replace("Bearer ", "");
  if (!token)
    return response.json({
      success: false,
      message: "Thiếu token",
    });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(verified);
    if (verified) return next();
  } catch (err) {
    return response.json({
      success: false,
      message: "Xác thực thất bại",
    });
  }
};

module.exports = authenticate;
