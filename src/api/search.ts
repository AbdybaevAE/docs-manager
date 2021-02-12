import axios, { AxiosInstance } from "axios";
import {
    Either,
    error,
    success
} from "../utils/either";
import { getBackendHost, Axios } from '../common/index';
import {
    HttpError,
    ServerInternal
} from "../utils/errors";
export type TSearchResult = {
    id: string;
    name: string;
    type: string;
    class: string;
    number: string;
    attributes: {
        [key: string]: string
    };
    createdAt: string;
}
export type SearchArgs = {
    [key: string]: string;
}
export type TSearchResultResponse = {
    id: string;
    file_name: string;
    type: string;
    number: string;
    class: string;
    metadata: {
        [key: string]: string
    };
    checked: boolean;
    origanization: string;
    created_at: string;
}
const BACKEND_HOST = getBackendHost();
export class SearchService {
    static async makeSearch(data: SearchArgs): Promise < Either < HttpError, TSearchResult[] >> {
        try {
            const response = await Axios.post("/metadata/search", data);
            const results: TSearchResultResponse[] = response.data;
            return success(results.map(mapSearchResponse));
        } catch (e) {
            return error(ServerInternal);
        }
    }
}

const mapSearchResponse = (data: TSearchResultResponse): TSearchResult => ({
    id: data.id,
    name: data.file_name,
    type: data.type,
    attributes: data.metadata,
    class: data.class,
    number: data.number,
    createdAt: data.created_at
})