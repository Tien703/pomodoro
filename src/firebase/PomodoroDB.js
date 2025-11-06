import { addDoc, collection, updateDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { increment } from "firebase/firestore"
import { db } from "./config"

export const UpdateTotalTime= async (uid, seconds) => {
  const statsRef = doc(db,"users",uid);
  const snap = await getDoc(statsRef);
  if (snap.exists()) {
    await updateDoc(statsRef, {
        totalTime: increment(seconds)
    });
  } else{
    await setDoc(statsRef,{
        totalTime: seconds
    });
  }
};

//get total time spend
export const getUserTotalTime = async (uid) => {
  const userRef = doc (db,"users", String(uid));
  const snap = await getDoc(userRef)
  if (snap.exists()) {
      return snap.data().totalTime ;
  } else{
      return {totalTime: 0};
  };
};
