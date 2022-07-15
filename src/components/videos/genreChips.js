import { useFilteredData } from "../../contexts/allContext"
import { v4 as uuid } from "uuid"
export const FilterChips = () => {
    const { state: { videoGenre }, dispatch } = useFilteredData()
    const clickCategory = (e) => {
        e.target.checked ? dispatch({ type: "FILTER-BY-GENRE", payload: e.target.value }) : dispatch({ type: `remove-${e.target.value}`.toUpperCase() })
    }
    const filters = [
        {
            _id: uuid(),
            filter: "Popular"
        },
        {
            _id: uuid(),
            filter: "Rock"
        },
        {
            _id: uuid(),
            filter: "Classical"
        },
        {
            _id: uuid(),
            filter: "Pop"
        } ]
    return (
        <div className="chips-container">
            <ul className="chips-list">
                <label className={
                    videoGenre.includes("") ? "active-filter" : "non-active-filter"
                }>
                    <input type="checkbox" value="all"
                        onChange={() => dispatch({ type: "ALL" })}
                    />
                    All
                </label>
                {filters.map(({filter, _id}) => (
                    <label className={
                        videoGenre.includes(filter) ? "active-filter" : "non-active-filter"
                    }
                    key={_id}
                    >
                        <input type="checkbox" value={filter}
                            onChange={(e) => clickCategory(e)}
                            checked={videoGenre.includes(filter)}
                        />
                        {filter}
                    </label>
                ))}
            </ul>
        </div>
    )
}