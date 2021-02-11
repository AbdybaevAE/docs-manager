export type HttpError = {
    status: number;
    message: string;
}
export const ServerInternal: HttpError = {
    status: 500,
    message: "ServerInternal"
}
export const UnAuthorized: HttpError = {
    status: 401,
    message: "InvalidCreds"
}