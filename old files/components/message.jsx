export default function Message() {
        function handleClick() {
            alert("You clicked a button")
        }
    return <div>
        <button onClick={handleClick}>Click here to get a message</button>
    </div>
}