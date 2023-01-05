import {Provider} from "react-redux";
import store from "./redux";
import {useSelector} from "react-redux";
import Button from "./Button";
function App() {
  const cars = useSelector(s=> s.car.cars);
  return (
    <Provider store={store}>
    <div>
  {
    cars.map((item)=>{
      return <h4>{item.model}</h4>
    })
  }
  <Button/>
   </div>
 </Provider>
  );
}

export default App;
