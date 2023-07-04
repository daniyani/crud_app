import TableItem from "./TableItem"

import './style.css';

const Table = ({ data, onDelete, onSetPrivilege }) => {
    return (
        <ul className="app-list list-group">
            {data.map(item => 
            <TableItem 
            key={item.id} 
            name={item.name} 
            salary={item.salary} 
            isIncrease={item.isIncrease}
            onDelete={() => onDelete(item.id)}
            onSetPrivilege={(name) => onSetPrivilege(item.id, name)}
            increase={item.isIncreased}
            rise={item.isRised}
            />
            )}
        </ul>
    )
}

export default Table;