import './TodoCheckbox.css';

const Checkbox = ({status, handleChange}) => {
    return (
        <div>
            <input type="checkbox" onChange={handleChange} checked={status==="CLOSED"} />
        </div>
    );
};

export default Checkbox;