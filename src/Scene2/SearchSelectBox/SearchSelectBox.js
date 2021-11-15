import SelectBox from '../../SelectBox/SelectBox';
import cities from '../../cities';

const SearchSelectBox = ({id, onChange, selectedCity}) => {
    return (
        <>
            <SelectBox id={id} options={cities.map((city) => city.name)} onChange={onChange} />
            {
                selectedCity.name !== '' && (
                    <>
                        <p>{`The selected city is ${selectedCity.name}`}</p>
                        <p>{`The selected city is in ${selectedCity.state}`}</p>
                    </>
                )
            }
        </>
    )
}

export default SearchSelectBox;