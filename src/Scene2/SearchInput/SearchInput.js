import Input from '../../Input/Input';

const SearchInput = ({type, id, fieldName, onChange, selectedCity}) => {
    return (
        <>
            <Input type={type} id={id} onChange={onChange} fieldName={fieldName} />
            {selectedCity.name !== '' && <p>{`The selected is ${selectedCity.name}`}</p>}
            
        </>
    )
}

export default SearchInput;