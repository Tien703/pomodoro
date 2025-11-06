import { updateDoc, doc, setDoc, getDoc, query, where } from "firebase/firestore";

import { increment } from "firebase/firestore"
import { db } from "./config"
import { DataConnectError } from "firebase/data-connect";

export const UpdateTotalTime= async (uid, seconds) => {
  const id = new Date().toISOString().split("T")[0]
  const statsRef = doc(db,"users",uid, "activies", id);
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
  let totalTimeSpent = 0;
  const userRef = doc (db,"users", String(uid));
  const snap = await getDoc(userRef);

  if (snap.exists()) {
    snap.forEach((doc) =>{
      const data = doc.data()
      totalTimeSpent += data.totalTime

    })
      return totalTimeSpent ;
      
  } else{
      return {totalTime: 0};
  };
};
