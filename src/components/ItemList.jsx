import { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/doors")
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error("Error fetching items:", error));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/doors/${id}`, { method: "DELETE" })
            .then((response) => {
                if (response.ok) {
                    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
                } else {
                    console.error("Failed to delete item");
                }
            })
            .catch((error) => console.error("Error deleting item:", error));
    };

    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default ItemList;