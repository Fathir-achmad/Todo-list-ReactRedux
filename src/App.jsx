import { Button, CircularProgress, Heading, Spacer } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementBy, increment, incrementBy } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value) //--- Manggil 
  const dispatch = useDispatch() //--- Dispatch menjalankan functionnya

  const setLocalStorage = () => {
    localStorage.setItem("name","ahmed") //---Local storage adalah syntax memakai local storage 
    
  }
  const delLocalStorage = () => {
    localStorage.removeItem("name")
  }
  return (
    <Heading textAlign={"center"} mt={"20px"}>STATE MANAGEMENT
    <Spacer/>
    { localStorage.getItem("name")}
    <Spacer />
    {count}
    <Spacer/>
    <CircularProgress value={count} size='120px' />    <Button onClick={() => (dispatch(decrement()))}>Decrement</Button>
    <Button onClick={() => (dispatch(increment()))}>Increment</Button>
    <Button onClick={() => (dispatch(incrementBy(5)))}>Increment(5)</Button>
    <Button onClick={() => (dispatch(decrementBy(5)))}>Decrement(5)</Button>
    <Spacer/>
    <Button onClick={setLocalStorage}>Local storage </Button>
    <Button onClick={delLocalStorage}>Delete local </Button>
    </Heading>
  );
}

export default App;
