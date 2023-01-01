import { Component } from 'react';
import CardList from './Component/card-list/card-list.comonent';
import SearchBox from './Component/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){

    super();

    this.state={
     Monsters:[],
     searchField: '',
    }
  }
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>this.setState(
      ()=>{
        return ({Monsters:users})
      },
      ()=>{
      
      }
    ));
  }
  onChange=(event)=>{
  
    const searchField=event.target.value.toLocaleLowerCase();
    
    this.setState(()=>{
      return {searchField };
    });
 }  
  render(){
    const {Monsters,searchField}=this.state;
    const {onChange}=this;

    const FilteredMonster= Monsters.filter(
      (m)=>{
          return m.name.toLocaleLowerCase().includes(searchField);
    }
    );
    return (
      <div className="App">
        <h1 className='app-tittle'>CAT CAFE</h1>
        <SearchBox onChange={onChange} placeholder='Search Cats' className='Search-Box'/>
        <CardList monster={FilteredMonster}/>
      </div>
    );
  }
  
}

export default App;
