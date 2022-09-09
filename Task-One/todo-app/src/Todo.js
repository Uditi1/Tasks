import React, {useState} from 'react';
import './Todo.css';


function Todo() {

    const [inputData, setinputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        if(!inputData){

        }else{
            setItems([...items, inputData]);
            setinputData('');
        }
        
    }

    const deleteItem = (id) => {
        console.log(id);
        const updateitems = items.filter((elem, ind) => {
            return ind != id;
        });
        setItems(updateitems);
    }

  return (
    <div className='todo'>
        <div className='todo_container'>
            <div className='todo_itemcontainer'>
                <div className='itemlist_one'>
                    <h2>Todo List App</h2>
                    <h4>Plan for Today!</h4>
                </div>
                <div className='itemlist_two'>
                    <input type="text" placeholder= "Add a todo" value={inputData}
                    onChange={(e) => setinputData(e.target.value)} />
                    <i class="fa-solid fa-plus" fa-lg onClick={addItem}></i>
                </div>
                <div className='itemlist_show'>

                    {
                        items.map((elem, ind) => {
                            return(
                                <div className='item_show' key={ind}>
                                    <h3>{elem}</h3>
                                    <i class="fa-solid fa-trash-can fa-xl" onClick={() => deleteItem(ind)}></i>
                                </div>

                            )
                        })
                    }

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo