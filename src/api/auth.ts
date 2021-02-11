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
import { getBackendHost } from "../common";
const BACKEND_HOST = getBackendHost();
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
            return success(token)
        } catch (e) {
            return error(UnAuthorized);
        }
    }
}

