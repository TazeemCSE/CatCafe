import { Component } from "react";
import './card-list.style.css';

class CardList extends Component{
    render(){

        const { monster } =this.props;
       console.log('render from card')
        return(
            <div className="card-list">
                { monster.map((monsters)=>{
                    const {id,name,email}=monsters;
                    return(
                    <div key={id} className='card-container'>
                        <img alt="monster" 
                        src={`https://robohash.org/${id+2}?set=set4&size=180x180`}/>
                        <h2 >{name}</h2>
                        <p>{email}</p>
                    </div>
                    )
                }) }
            </div>
        );
           
    }
    
}

export default CardList;