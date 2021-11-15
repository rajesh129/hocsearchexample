import './Input.scss';

const Input = ({type, id, onChange, fieldName}) => (
    <div className="input-field">
        <label htmlFor={id}>{fieldName}</label>
        <input type={type} id={id} onChange={onChange} />
    </div>
)

export default Input;