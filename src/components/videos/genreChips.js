import { useFilteredData } from "../../contexts/allContext"
export const FilterChips = () => {
    const { state: { videoGenre }, dispatch } = useFilteredData()
    const clickCategory = (e) => {
        e.target.checked ? dispatch({ type: "FILTER-BY-GENRE", payload: e.target.value }) : dispatch({ type: `remove-${e.target.value}`.toUpperCase() })
    }
    const filters = ["Popular", "Rock", "Classical", "Pop"]
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
                {filters.map((filter) => (
                    <label className={
                        videoGenre.includes(filter) ? "active-filter" : "non-active-filter"
                    }>
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