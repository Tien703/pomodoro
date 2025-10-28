import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config"
import { useAuth } from "../context/AuthContext";

export const AddTask = async (uid, task) =>{
  user = useAuth()
  if (!user) {
    console.log("User not logged in");
    return;
  } 
  try {
    await addDoc(
      collection(db, "users", user.id, "todos"),{
        text: task,
        done: false,
        createdAt: serverTimestamp(),
      }

    );
    console.log("add successfully")
  }catch (err){
    console.error("failed to add task:", err);
  }
};