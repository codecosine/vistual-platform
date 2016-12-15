let jwt = require('jsonwebtoken');
let config = require('../config');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfYnNvbnR5cGUiOiJPYmplY3RJRCIsImlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjpbODgsNjksMTIwLDEzOCwyMDcsMjgsMTk0LDk4LDEyNCwxMiwxOTAsNDFdfSwiaWF0IjoxNDgxODEyNjQ4LCJleHAiOjE0ODE4MzQyNDh9.lc9e1az4uVGg5VNiJ6vOyoONmW8i0B_I4IMpsLIWVBA";
jwt.verify(token, config.auth.secret, function(err, decoded) {
  console.log(decoded);
});
