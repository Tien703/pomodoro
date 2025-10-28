import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { AddTask, RmTask, ShowTodo} from "../firebase/todoList";
export function TodoPage() {
  const { user } = useAuth();
  //Todo: ti nho sua cho nay dua task vao function handleadd cho gon 
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  //handle show todo list
  //then = async + await (setTodo())
  useEffect(()=>{
    if (!user) return;
    ShowTodo(user.uid).then(setTodo);
  },[user]);
  //add new task 
  const HanldeAdd = () => {
    if (!task.trim()) return; 
    AddTask(user.uid, { text: task }); // correct data shape
    setTask("");
  };
  const HandleDelete = async(taskid) =>{
    await RmTask(user.uid,taskid);

  };
  return (
    <div>
      <title>Todo </title>
      {user ? (
        <div>
          <h1>{task}</h1>
          <input type="text" placeholder="task" onChange={(e) => setTask(e.target.value)} />
          <button type="submit" onClick={HanldeAdd}>Submit</button>
           <ul>
            {todo.map(t => (
              <li key={t.id}>
                {t.text} 
                <button onClick={HandleDelete(t.id)}>
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1>login to add task</h1>
      )}
    </div>
  )
}