export type HttpError = {
    status: number;
    message: string;
}
export const ServerIntervanl: HttpError = {
    status: 500,
    message: "ServerInterval"
}
export const UnAuthorized: HttpError = {
    status: 401,
    message: "InvalidCreds"
}