import PropTypes from 'prop-types';
import './List.css'

const List = ({ items }) => {
    return (
        <div>
        {
            items.map((item, index) => <div className="list-item" key={index}>{item}</div>)
        }
        </div>
    );
}

List.propTypes = {
    items: PropTypes.array
}

export default List;