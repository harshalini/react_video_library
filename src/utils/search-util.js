import { useSearch } from "../contexts/searchContext";

export const GetSearchedVideos = (searchVid) => {
    const { state: { searchVal } } = useSearch();

    searchVid = searchVid?.filter(({title}) => title.toLowerCase().includes(searchVal.toLowerCase()))
    return searchVid;
}