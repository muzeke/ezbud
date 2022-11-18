import { UserAttributes } from './user.shape';

export interface IHttpRequest<
  RBody = unknown,
  RQuery = unknown,
  RParams = unknown,
  RFiles = unknown
> {
  body: RBody;
  files?: RFiles;
  query?: RQuery;
  params?: RParams;
  loggedUser?: UserAttributes;
  integration?: boolean;
  headers?: {
    accessToken: string;
    refreshToken: string;
    authorization: string;
    referrer?: string;
  };
}
