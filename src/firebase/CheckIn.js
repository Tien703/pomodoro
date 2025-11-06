import { addDoc, collection, updateDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { increment } from "firebase/firestore"
import { db } from "./config"
export  const CheckIn = async (uid, timeSpent) =>{
    // get Date as ID
  const id = new Date().toISOString().split("T")[0];
  try {
    await addDoc(collection(db, "users", uid, "activies",id ), {
      totalTimeSpent : increment(timeSpent),

    });
    console.log("add successfully");
  } catch (err) {
    console.error("failed to add task:", err);
  };
}


