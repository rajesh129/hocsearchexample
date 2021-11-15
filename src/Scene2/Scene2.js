import SearchInput from "./SearchInput/SearchInput";
import withCitySearch from "../withCitySearch/withCitySearch";
import SearchSelectBox from "./SearchSelectBox/SearchSelectBox";

const Scene2 = () => {
    const searchCity = withCitySearch(SearchInput)({type: "text", id:"scene2-textbox", fieldName:"Search City"});
    const selectCity = withCitySearch(SearchSelectBox)({id:"scene2-selectbox", fieldName:"Select City"});
    return (
        <div className="examples__container">
            <h1>Scene 2</h1>
            <h2>Search City</h2>
            <p className="info-message">Text Box</p>
            {searchCity}
            <h2>Select City</h2>
            <p className="info-message">Select Box</p>
            {selectCity}
        </div>
    )
}

export default Scene2;