import { TokenAttributes } from '@shapes';
import * as jwt from 'jsonwebtoken';

const verifyJwtToken = async (
  token: string,
  secret: string,
  allowedExpired: boolean
): Promise<TokenAttributes> => {
  try {
    const decode = jwt.verify(token, secret, {
      ignoreExpiration: allowedExpired,
    }) as object;

    return { indentity: decode['id'] };
  } catch (error) {
    return null;
  }
};
export const authProvider = { verifyJwtToken };
