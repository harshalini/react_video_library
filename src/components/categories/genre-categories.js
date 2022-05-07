import { Link } from "react-router-dom";
import { useCategory, useFilteredData } from "../../contexts/allContext";

export const Genres = () => {
    const { category } = useCategory();
    const { dispatch } = useFilteredData();
    return (
        <>
        <h1 className="category-heading">Genres</h1>
            <div className="genre-container">
                {category.map(({ categoryImg, _id, categoryName }) => (
                    <div className="ui-component card card-with-textOverlay" key={_id}>
                        <div className="card-image">
                            <Link to={`/videoListing?categoryName=${categoryName}`}
                                onClick={() => dispatch({ type: "FILTER-BY-GENRE", payload: categoryName })}
                            ><img
                                src={categoryImg} className="opaque-image"></img></Link>
                        </div>
                        <span className="genre-name">{categoryName}</span>
                    </div>
                ))}
            </div>
        </>
    )
}