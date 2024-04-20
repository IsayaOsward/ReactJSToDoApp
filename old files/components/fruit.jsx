export default function Fruit({name,price,emoji, soldout}) {
    return (
        <div>
        {emoji} {name} {price} : {soldout? "Soldout": "Available"}
    </div>
    )
}