import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
// import Button from "./components/Button";
// import Alert from "./components/Alert"
// import Like from "./components/Like";
// import Message from "./Message";

// React icons ----- npm i react-icons
// import { BsFillCalendarDateFill } from 'react-icons/bs';
// import { VscArrowBoth } from 'react-icons/vsc';

function App() {

  // const [alertVisible, setAlertVisibility] = useState(false);
  
  // ---------------------
  // const [drink, setDrink] = useState({
  //   title: 'Expresso',
  //   price: 3,
  // });

  // ---------------------
  // const [customer, setCustomer] = useState({
  //   name: 'Lorenzo',
  //   address: {
  //     city: 'Milan',
  //     zipCode: '52003'
  //   }
  // });
  
  // ---------------------
  // const [tags, setTags] = useState(['happy', 'mad']);

  // ---------------------
  // const [bugs, setBugs] = useState([
  //   { id: 1, title: 'Bug 1', fixed: false },
  //   { id: 2, title: 'Bug 2', fixed: false },
  // ]);

  // ---------------------
  // const handleClick = () => {
    // const newDrink = {
    //   ...drink,
    //   price: 6, 
    // }
    // much faster then write a new const ... take all drink value
    // setDrink({...drink, price: 5});
  // };

  // ---------------------
  // const handleClick2 = () => {
  //   setCustomer({ 
  //     ...customer, 
  //     address: { ...customer.address, city: 'Florence' },
  //   });
  // };

  // ---------------------
  // const handleClick3 = () => {
    
  //   // add
  //   setTags([...tags, 'pacefull']);
    
  //   // remove
  //   setTags(tags.filter(tag => tag !== 'happy'));

  //   // update 
  //   setTags(tags.map(tag => tag === 'happy' ? 'happines' : tag));
  // };

  // --------------------
  // const handleClick4 = () => {
  //   setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true} : bug))
    // or :
    // setBugs(produce(draft => {
    //   const bug = draft.find(bug => bug.id === 1);
    //   if (bug) bug.fixed = true;
    // }))
  // };

  const [cartItems, setCartItems] = useState(['Product 1', 'Prodcut 2']);
 
  return (
    <div>
  
      {/* Alert
      { alertVisible && <Alert onClose={ () => setAlertVisibility(false) }> 
        <h1>Alert primary blue!</h1>
        <div className="card w-50 mx-auto bg-dark">
          <div className="card-body">
            <code className="text-success">Ohter html tag here!</code>
          </div>
        </div>
        <div className="card mt-2 p-2">
          <div className="card-title">
            <h2>Hello world</h2>
          </div>
          <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque voluptates error ea asperiores nemo repellendus quaerat dolorum cumque quia rerum distinctio recusandae exercitationem quisquam, molestiae suscipit. Fugiat, vero optio?</p>
          </div>
        </div>
      </Alert>}

      <Button color="success" onClick={() => setAlertVisibility(true)}>
        My Button <span>To go somewhere</span>
      </Button> */}

      {/* Icons */}
      {/* <div className="w-50 mx-auto"><BsFillCalendarDateFill color="red" size={40}/></div>
      <div><VscArrowBoth color="green" size={30}/></div> */}
      
      {/* <Like onClick={() => console.log('clicked')}/> */}

      {/* --------------- */}
      {/* <div>{drink.price}</div>
      <button onClick={handleClick}>Click me!</button> */}
      {/* --------------- */}
      
      {/* --------------- */}
      {/* {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'fixed' : 'New'}</p>)}
      <button onClick={handleClick4}>Click here!</button> */}
      {/* --------------- */}

      {/* --------------- */}
      <NavBar cardItemsCount={cartItems.length}/>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
    </div>
  );
}

export default App;