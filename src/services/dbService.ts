// src/services/dbService.ts
import { db } from "../Database/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

// Example: Add user investment
export const addInvestment = async (userId: string, investment: any) => {
  try {
    const docRef = await addDoc(collection(db, "users", userId, "investments"), investment);
    return docRef.id;
  } catch (err) {
    console.error("Error adding investment: ", err);
  }
};

// Example: Get all investments for a user
export const getInvestments = async (userId: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, "users", userId, "investments"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error("Error fetching investments: ", err);
  }
};
