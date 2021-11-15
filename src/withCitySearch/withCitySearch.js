import { useState } from "react";
import cities from "../cities";

const withCitySearch = (WrappedComponent) => {
    
    return function (props) {
        const initialValue = {
            id: '0',
            name: '',
            state: ''
        }
        const [value, setValue] = useState(initialValue);

        const onChange = (e) => {
            const enteredValue = e.target.value;
            if(enteredValue.length > 2) {
                const selectCityDetails = cities.find((city) => city.name.indexOf(enteredValue) >= 0);

                setValue(selectCityDetails ? selectCityDetails : {
                    id: '0',
                    name: 'none',
                    state: 'none'
                });
            }
            else {
                setValue(initialValue);
            }
        }
        return <WrappedComponent {...props}  onChange={onChange} selectedCity={value} />
    }
}

export default withCitySearch;