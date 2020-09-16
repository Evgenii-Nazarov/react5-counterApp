import React, {useState} from 'react';
import ListItem from "./listItem";

function App() {
    const [list, setList] = useState([1, 2, 3, 4]);

    const counterPlus = (i) => {
        console.log('index', i)
        console.log(setList);
    }


    return (
        <div>
            {list.map( (el, index) => {
                return <ListItem counterPlus={counterPlus} index={index} el={el} key={Math.random()}/>
            })}
        </div>
    );
}

export default App;
