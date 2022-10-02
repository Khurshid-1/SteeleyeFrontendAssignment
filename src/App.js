import './App.css';
import List from './List';


function App() {
  const obj = {index : 1,isSelected : true,onClickHandler:function(){},text:'hello'}
  return (
    <div className="App">
   <List items={obj}/>
    </div>
  );
}

export default App;
