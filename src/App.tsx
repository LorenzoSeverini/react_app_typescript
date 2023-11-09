import { useState, useTransition } from "react";
import Form from "./components/Form";
// import ExpandText from "./components/ExpandText";

function App() {

  // 1
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: 'Lorenzo',
  //     age: 22,
  //   },
  // });

  // 1
  // const handleClick1 = () => {
  //   setGame({
  //     ...game, 
  //     player: { ...game.player, name: 'Frank' },
  //   });
  // };

  // 2
  // const [pizza, setPizza] = useState({
  //   name: 'Margherita', toppings: ['Mozzarella', 'Tomato sauce', 'Basil'] 
  // });

  // 2
  // const handleclick2 = () => {
  //   setPizza({
  //     ...pizza,
  //     toppings: [ ...pizza.toppings, 'cheese']
  //     //   setTags([...tags, 'pacefull']);

  //   });
  // };
 
  // 3 
  // const [cart, setCart] = useState({
  //   discount: .1,
  //   items: [
  //     { id: 1, title: 'Product 1', quantity: 1 },
  //     { id: 2, title: 'Product 2', quantity: 1 },
  //   ],
  // });

  // 3 
  // const handleClick3 = () => {
  //   setCart({ ...cart, items: cart.items.map(item => item.id === 1 ? { ...item, quantity: item.quantity + 1} : item)})
  // } 

  return (
    <div className="m-4 d-flex flex-column gap-3 ">

      {/* Game handleclick 1 */}
      {/* <div className="d-flex align-items-center gap-2">
        <button className="btn btn-primary" onClick={handleClick1}>Show the name</button>
        <div key={game.id}><strong>Name:</strong> {game.player.name}</div>
      </div> */}
      {/* ------------------ */}

      {/* Pizza handleclick 2 */}
      {/* <div className="d-flex align-items-center gap-2">
        <button className="btn btn-primary" onClick={handleclick2}>Add toppings</button>
        <div><strong>Pizza:</strong> {pizza.name}</div>
        <div><strong>Toppings:</strong> {pizza.toppings}</div>
      </div> */}
      {/* ------------------ */}
      
      {/* Cart handleclick 3 */}
      {/* <div className="d-flex align-items-center gap-2">
        <button className="btn btn-dark" onClick={handleClick3}>Add quantity</button>
        <div>{cart.discount}</div>
        {cart.items.map((item: { id: number; title: string; quantity: number }) => (
          <div key={item.id}>
            <div><strong>{item.title}</strong></div>
            <div>Quantity: {item.quantity}</div>
          </div>
        ))}
      </div> */}
      {/* ------------------ */}
      
      {/* ------------------ */}
      {/* <ExpandText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sapiente, reiciendis distinctio, cum dolorem quisquam vel adipisci omnis provident beatae libero voluptatum esse officia odio veritatis explicabo magni eligendi tempore pariatur deserunt aperiam sint reprehenderit ipsum. Temporibus harum repellat minima, quia eum corporis nam ducimus officia animi, possimus beatae laborum reiciendis fugiat similique eveniet velit molestiae quae vitae iure sapiente cupiditate nobis aut neque aliquid! Veniam sint a nesciunt natus possimus aut ipsam delectus officia architecto velit aliquid, vero hic beatae illo inventore totam eaque quis, atque dolor expedita. Velit, culpa. A consequatur expedita, consectetur iste, odit ratione distinctio similique ducimus laudantium dolor nostrum quo exercitationem at velit iure autem asperiores eligendi cum? Possimus iste nesciunt esse quo, labore, officia, inventore maiores architecto ad iure asperiores voluptatum. Blanditiis quibusdam hic autem ex id! Sint repellat veniam nesciunt, veritatis magni rerum earum adipisci rem natus quisquam totam ex numquam porro aspernatur et repudiandae expedita excepturi est. Quibusdam voluptate ratione nobis reiciendis veniam accusantium sapiente atque itaque delectus quidem ipsa nisi, iste, fugit labore nostrum veritatis quisquam hic quae fugiat sit esse. Nemo quae aliquam officia id sed inventore cumque tempore, sequi, dolor expedita cupiditate voluptas blanditiis autem sapiente modi quaerat cum iusto numquam hic veniam corporis, mollitia quibusdam officiis. Cum nisi exercitationem voluptatibus sapiente in beatae similique eius quos est rerum illo autem quas laboriosam aspernatur sunt, quo rem nesciunt suscipit excepturi voluptatem qui expedita quidem vel minima? Enim praesentium beatae facilis accusantium obcaecati delectus, inventore quod doloremque omnis officia, voluptate itaque totam velit vel! Assumenda non suscipit excepturi consectetur delectus adipisci nam provident, beatae totam earum quidem quibusdam repudiandae, laborum neque labore aperiam corrupti possimus consequuntur ut tempora sint. Eligendi, magnam. Numquam, est sed? Excepturi ipsum quis vero saepe nisi, dicta sed velit alias qui! Nemo ea rem saepe sunt?
      </ExpandText> */}
      {/* ------------------ */}

      {/* ------------------ */}
      <Form />
      {/* ------------------ */}
    </div>
  );
}

export default App;