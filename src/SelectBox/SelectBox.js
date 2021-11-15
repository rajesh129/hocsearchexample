import './SelectBox.scss';
const SelectBox = ({options, onChange, id}) => {
    
    return (
        <div className="input-field">
            <label htmlFor={id}>Select City</label>
            <select id={id} onChange={onChange}>
                <option>Please Select</option>
                {options.map((option, i) => <option key={i}>{option}</option>)}
            </select>
        </div>
    )
}

export default SelectBox;