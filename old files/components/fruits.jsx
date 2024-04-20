import Fruit from "./fruit";
export default function Fruits() {
 const fruits= [
    {name:"Banana", price: 1, emoji: "🍌", soldout: false}, 
    {name: "Mango", price: 2, emoji: "🥭", soldout : true}, 
    {name:"Avocado", price: 3, emoji: "🥑", soldout: false}, 
    {name:"PineApple", price: 6, emoji: "🍍", soldout:true}, 
    {name:"StrawBerry", price: 9, emoji: "🍓", soldout: false}, 
    {name:"Orange", price: 7, emoji: "🍊", soldout: true}
    ];

 return (
    <div>
            {fruits.map((fruit)=>(
                <Fruit name= {fruit.name} emoji= {fruit.emoji} price={fruit.price} soldout={fruit.soldout}/>
            ))}
    </div>
 );   
}