import './style.css';

const SearchPanel = ({ search, onSetSearch }) => {
    return (
        <input type="text"
           className="form-control search-input"
           placeholder="Найти сотрудника"
           value={search}
           onChange={(e) => onSetSearch(e.target.value)}
        />
    )
}

export default SearchPanel;