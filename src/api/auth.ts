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
}
export class AuthService {
    static async makeLogin(values: TMakeLoginArgs): Promise < Either < HttpError, TMakeLogin >> {
        try {
            const roleValues = {
                ...values,
                role: 'value'
            };
            const response = await Axios.post("/auth/login", roleValues);
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