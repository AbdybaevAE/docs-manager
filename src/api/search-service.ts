import { Either, error, success } from "../utils/either";
import { HttpError, ServerInternal } from "../utils/errors";
export type TSearchResult = {
    name: string;
    type: string;
    class: string;
    number: string;
    attributes: {
        [key: string]: string
    };
    createdAt: string;
}
export type TSearchResultResponse = {
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
export class SearchService {
    static async makeSearch(data: {[name: string]: string}): Promise<Either<HttpError, TSearchResult[]>> {
        try {
            const results: TSearchResult[] = await mockHttpCall(data);
            return success(results);
        } catch (e) {
            return error(ServerInternal);
        }

    }
}

const mockHttpCall = (data: {[name: string]: string}) : Promise<TSearchResult[]> => {
    return Promise.resolve([]);
};

const mapSearchResponse = (data: TSearchResultResponse): TSearchResult => ({
    name: data.file_name,
    type: data.type,
    attributes: data.metadata,
    class: data.class,
    number: data.number,
    createdAt: data.created_at
})