import { updateDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { collection, getDocs, increment } from "firebase/firestore"
import { db } from "./config"

export const UpdateTotalTime= async (uid, seconds) => {
  const userRef = doc(db, "users", String(uid));
  const snap = await getDoc(userRef);
  if (snap.exists()) {
    await updateDoc(userRef, {
        totalTime: increment(seconds)
    });
  } else{
    await setDoc(userRef,{
        totalTime: seconds
    });
  }
};

//get total time spend
export const getUserTotalTime = async (uid) => {
    const userRef = doc (db, "user", String(uid));
    const snap = await getDoc(userRef)
    if (snap.exists()) {
        return snap.data().totalTime || 0;
    } else{
        return 0;
    }



}


