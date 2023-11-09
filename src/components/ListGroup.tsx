import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    // (item: string) => void
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (

        // Fragemnt importing fragment to use multiple line or
        // Wrap all in a <div></div> or
        // Delete import fragment line on top and leave <> </> empty ( use fragment by default )
        
        <>
        <h1>{heading}</h1>

        {items.length === 0 && <p>No item found</p>}

        <ul className="list-group">
            {items.map((item, index) => (
                <li
                    className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    key={item}
                    onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item);  
                    }}
                >
                    {item}
                </li>
            ))}
        </ul>
        </>
    );
}

export default ListGroup;
