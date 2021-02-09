import { resolve } from "q";
import { Either, error, success } from "../utils/either";
import { HttpError, UnAuthorized } from "../utils/errors";
const url = "some-url";
export type TMakeLogin = {
    token: string
}
export class AuthService {
    static async makeLogin(login: string, password: string): Promise<Either<HttpError, TMakeLogin>>{
        try {
            const token: string = await mockHttpCall(url, {
                login,
                password
            });
            return success({
                token
            })
        } catch (e) {
            return error(UnAuthorized);
        }
    }
}

const mockHttpCall = (url: string, body: any) : Promise<string> => Promise.resolve("Success")