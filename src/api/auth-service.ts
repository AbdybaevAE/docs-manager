import {
    resolve
} from "q";
import {
    Either,
    error,
    success
} from "../utils/either";
import {
    HttpError,
    UnAuthorized
} from "../utils/errors";
import axios from 'axios'
const BACKEND_HOST = "http://localhost:3000";
export type TMakeLogin = {
    token: string
}
export type TMakeLoginArgs = {
    username: string;
    password: string;
}
export class AuthService {
    static async makeLogin(values: TMakeLoginArgs): Promise < Either < HttpError, TMakeLogin >> {
        try {
            const {
                data: {
                    token
                }
            } = await axios.post(BACKEND_HOST + "/login", values);
            return success({
                token
            })
        } catch (e) {
            return error(UnAuthorized);
        }
    }
}

const mockHttpCall = (url: string, body: TMakeLoginArgs): Promise < string > => {
    if (body.username == "aaa" && body.password == "bbb") return Promise.resolve("Success");
    return Promise.reject();
}