export interface IApiResponse<T = any> {
  result: T;
  success: boolean;
  errors: string;
  messages: string;
}
