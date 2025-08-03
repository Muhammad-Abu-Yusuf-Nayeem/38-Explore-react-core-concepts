export default function Singer({singer}){
    console.log(singer);
    return (
        <div style={{
        border: "3px solid aqua",
        padding: "3px",
        margin: "2px"
        }}>
            <h3>Singer: {singer.name}</h3>
            <h4>age: {singer.age}</h4>
        </div>
    )
}