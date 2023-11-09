import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert"
import Like from "./components/Like";
// React icons ----- npm i react-icons
// import { BsFillCalendarDateFill } from 'react-icons/bs';
// import { VscArrowBoth } from 'react-icons/vsc';

function App() {

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>

      {/* Alert */}
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
      </Button>

      {/* Icons */}
      {/* <div className="w-50 mx-auto"><BsFillCalendarDateFill color="red" size={40}/></div>
      <div><VscArrowBoth color="green" size={30}/></div> */}
      
      <Like onClick={() => console.log('clicked')}/>
    </div>
  );
}

export default App;