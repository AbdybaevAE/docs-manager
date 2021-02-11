import { TSearchResult } from "../../api/search";

export const TableViewResults = (results: TSearchResult[]) => {
    return (
        <div>
            {results.map(item => item.name)}
        </div>
    )
}