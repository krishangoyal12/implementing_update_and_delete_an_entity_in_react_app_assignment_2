const Item = ({ item, onDelete }) => {
    return (
        <div style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
            <h3>{item.name}</h3>
            <p>Status: {item.status}</p>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    );
};

export default Item;