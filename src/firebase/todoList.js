import { collection, doc, addDoc, getDocs,deleteDoc, onSnapshot, serverTimestamp, orderBy} from "firebase/firestore";
import { db } from "./config";
import { query } from "firebase/firestore";

export const AddTask = async (uid, task) => {
  try {
    await addDoc(collection(db, "users", uid, "todos"), {
      text: task.text,
      done: false,
      createdAt: serverTimestamp(),
    });
    console.log("add successfully");
  } catch (err) {
    console.error("failed to add task:", err);
  }
};

export const RmTask = async (uid, taskID) => {
  try {
    const docRef =doc(db, "users", uid, "todos", taskID);
    await deleteDoc(docRef)
    console.log("delete succesfully");
  } catch (err) {
    console.log("failed to remove:", err);
  }
};

export const ShowTodo =(uid, callback)  => {
  const q = query(
    collection(db, "users", uid, "todos"),
    orderBy("createdAt", "desc")
  );
  const unsub =  onSnapshot(q, (snapshot)=>{
    const tasks = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(tasks);
  },(error)=>{
    console.error("Error fetching todo list", error);
  });
  return unsub;
}; 