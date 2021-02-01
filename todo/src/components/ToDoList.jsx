import React, {useState} from 'react';

const ToDoList = props => {
    const [tasks, setTasks] = useState([]);

    

    const addItem = (e) => { 
        e.preventDefault();
        const temps = tasks.slice();
        temps.push({
            desc: e.target.item.value,
            isChecked: false
        });

        setTasks(temps);
        e.target.item.value = ""
    }


    const changeCheck=(index,flag)=>{
        const temps = tasks.slice();
        temps[index].isChecked=flag;
        setTasks(temps);

    }
    const handleDelete = (index) => {
      const temp = tasks.slice();
      temp.splice(index, 1);
      setTasks(temp);
  }


    // const changeCheck = (index) => {
    //     const temp = tasks.slice();
    //     temp[index].isChecked = !temp[index].isChecked;
    //     setTasks(temp);
    // }

    
    return (
        <>

>    
            <form onSubmit={addItem} >
                <input type="text" name="item" id="item" placeholder="Enter a task"/>
                <button>Add</button>
            </form>
            

            <div >
            <h1>Your To Do List </h1>  
            <table>
                <tbody>
                {
                  tasks.map((item,i)=>
                  
                    <tr key={i}>
                      <td> {item.desc} </td>
                      <td> <input type="checkbox" checked={item.isChecked} onChange={(e)=>changeCheck(i,e.target.checked)}/> </td>
                      <td><button onClick={() => handleDelete(i)}>Delete</button></td>
                      
                    </tr>
                  
                  
                  )

                }


                </tbody>
            </table>
            </div>

        </>
    );
}
export default ToDoList;