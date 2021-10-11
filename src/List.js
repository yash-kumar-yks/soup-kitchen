import React from 'react';
import {Link} from 'react-router-dom';
import ShowItem from './ShowItem';
import './List.css';
import { useStateValue } from './StateProvider';
function List({ val }) {
    const [{data}, dispatch] = useStateValue();
    if(val=="ShowAll"){
        return(
        <div  className="list" >
            
            {data && data.map((datas) => (
                  
                   
                    <div key={datas.id}>
                    <Link  className='text-link' to={`/ShowItem/${datas.id}`}>
                    <img src ={datas.src} alt=""/>
                   <div className="text-info">
                    <p> <span> {datas.quantity}</span> kg {datas.name} </p>
                    </div>
                   </Link>
                  </div>
            )
                
        )
        }
       
           
        </div>
        );
    }
    else{
    return (
        <div  className="list" >
            
            {data && data.map((datas) => {
                
                if(datas.name==val){
                   return(
                   
                    <div key={datas.id}>
                    <Link  className='text-link' to={`/ShowItem/${datas.id}`}>
                    <img src ={datas.src} alt=""/>
                   <div className="text-info">
                    <p> <span> {datas.quantity}</span> kg {datas.name} </p>
                    </div>
                   </Link>
                    </div>)
            }}
                
        )
        }
       
           
        </div>
    );}
}

export default List