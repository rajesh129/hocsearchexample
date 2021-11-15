import { useState } from 'react';
import Input from '../../Input/Input';
import cities from '../../cities';

const SearchInput = () => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        const enteredValue = e.target.value;
        if(enteredValue.length > 2) {
            const selectCityDetails = cities.find((city) => city.name.indexOf(enteredValue) >= 0);

            setValue(selectCityDetails ? selectCityDetails.name : 'none');
        }
        else {
            setValue('');
        }
    }
    return (
        <>
            <Input type="text" id="search-city" onChange={onChange} fieldName="Search City" />
            {value && <p>{`The selected is ${value}`}</p>}
            
        </>
    )
}

export default SearchInput;