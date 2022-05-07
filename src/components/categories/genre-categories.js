import { useCategory } from "../../contexts/category-context";
export const Genres = () => {
    const { category } = useCategory();
    return (
        <>
        <h1 className="category-heading">Genres</h1>
        <div className="genre-container">
        {category.map(({categoryImg, _id, categoryName}) => (
        <div className="ui-component card card-with-textOverlay" key={_id}>
            <div className="card-image">
                <img src={categoryImg} className="opaque-image" />
            </div>
                <span className="genre-name">{categoryName}</span>
        </div>
        ))} 
        </div>
        </>
    )
}