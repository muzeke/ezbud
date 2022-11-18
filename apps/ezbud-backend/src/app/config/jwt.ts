export const jwtConfig = {
  secret: process.env.JWT_SECRET_KEY,
  tokenExpirationDate: '1h',
};
