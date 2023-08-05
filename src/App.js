import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import Counter from './CounterApp/Counter';
import AxiosApi from './AxiosApiCalls/AxiosApi';
import NewApi from './AxiosApiCalls/NewApi';
import InputOnUI from './InputDataDisplayOnUi/InputOnUI';
import HideAndShow from './Hide&Show/HideAndShow';
import HideBtn from './Hide&Show/HideBtn';
import Toggle from './Hide&Show/Toggle';
import SearchFilter from './SearchFilterApp/SearchFilter';

function App() {
  
  
  return (
    <div className="App">
      {/* <AxiosApi /> */}
      {/* <NewApi /> */}
      {/* <InputOnUI /> */}
      {/* <HideAndShow /> */}
      {/* <HideBtn /> */}
      {/* <Toggle /> */}
      <SearchFilter />
    </div>
  );
}

export default App;
