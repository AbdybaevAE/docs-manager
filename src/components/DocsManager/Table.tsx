import { TSearchResult } from "../../api/search-service";

export const TableViewResults = (results: TSearchResult[]) => {
    console.log('dsada');
    return (
        <div>
            {results.map(item => item.name)}
        </div>
    )
}