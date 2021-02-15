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
import {
    getBackendHost,
    addAxiosToken
} from "../common";
import {
    SearchService
} from "./search";
import {
    Axios
} from '../common/index';
import {
    setToken
} from '../utils/cookies';
export type TMakeLogin = {
    token: string
}
export type TMakeLoginArgs = {
    username: string;
    password: string;
    role?: string;
}
export class AuthService {
    static async makeLogin(values: TMakeLoginArgs): Promise < Either < HttpError, TMakeLogin >> {
        try {
            const response = await Axios.post("/auth/login", values);
            const token = response.headers.authorization as string;
            if (token == null) throw UnAuthorized;
            setToken(token);
            addAxiosToken(token);
            return success({
                token
            })
        } catch (e) {
            return error(UnAuthorized);
        }
    }
}