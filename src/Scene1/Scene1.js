import SearchInput from "./SearchInput/SearchInput";
import SearchSelectBox from "./SearchSelectBox/SearchSelectBox";

const Scene1 = () => {
    return (
        <div className="examples__container">
            <h1>Scene 1</h1>
            <h2>Search City</h2>
            <p className="info-message">Text Box</p>
            <SearchInput />
            <h2>Select City</h2>
            <p className="info-message">Select Box</p>
            <SearchSelectBox />
        </div>
    )
}

export default Scene1;