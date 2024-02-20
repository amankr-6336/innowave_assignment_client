import React, { useEffect } from "react";
import MainPage from "./component/MainPage";
import { useDispatch } from "react-redux";
import { getList } from "./redux/slice/appConfigSlice";

function App() {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getList());
  },[dispatch]);
  
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
