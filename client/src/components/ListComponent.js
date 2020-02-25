import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ListItem from './ListItem';

const ListComponent = () =>{
    const [listState, setListState] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(res => setListState(res.data))
            .catch(err => console.log("ERROR: ",err))
    },[])
    return(
        listState.map((item, i) =>(
            <ListItem author={item}  key={i}/>
        ))
    )
}
export default ListComponent