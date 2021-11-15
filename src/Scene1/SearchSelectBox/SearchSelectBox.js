import { useState } from 'react';
import SelectBox from '../../SelectBox/SelectBox';
import cities from '../../cities';

const SearchSelectBox = () => {

    const [value, setValue] = useState('');

    const onChange = (e) => {
        const enteredValue = e.target.value;
        const selectCityDetails = cities.find((city) => city.name.indexOf(enteredValue) >= 0);
        setValue(selectCityDetails ? selectCityDetails : 'none');
    }
    
    return (
        <>
            <SelectBox id="selectCity" options={cities.map((city) => city.name)} onChange={onChange} />
            {
                value && (
                    <>
                        <p>{`The selected city is ${value.name}`}</p>
                        <p>{`The selected city is in ${value.state}`}</p>
                    </>
                )
            }
        </>
    )
}

export default SearchSelectBox;