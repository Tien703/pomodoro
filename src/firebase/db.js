import { updateDoc, doc, setDoc } from "firebase/firestore";
import {collection, getDocs, increment} from "firebase/firestore"
import {db} from "./config"
export const updateStudyTime = async (id,newDuration) => {
  try {
    const timeSpended = doc(db,"timespend", id);
    await updateDoc(timeSpended,{totalTime: newDuration});
    console.log("Timer updated");
  }catch(error) {
    console.log("Error updateting time:", error)
  }
};

/**
 * Increment the total time spent by a user
 * @param {string} uid - The id of the user
 * @param {number} seconds - The number of seconds to add
 * @returns {Promise<void>} A promise that resolves when the update is successful
 */
export const addPomodoroTime= async(uid, seconds) =>{
  const userRef = doc(db, "users", uid);
  try {
    await updateDoc(userRef,{
      totalTime: increment(seconds),
    });
    console.log(`Added ${seconds} seconds for user ${uid}`);
  } catch (error){
    console.log.error("Error updating time:", error);
  }
};
  /* init user if need*/
export const ininitUser = async (uid) =>{
  const userRef = doc(db, "user", uid);
  await setDoc(userRef, {totalTime: 0}, {merge: true});
};


export const getUserTotalTime = async (uid) =>{
  const userRef
}