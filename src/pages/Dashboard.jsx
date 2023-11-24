
import React, { useEffect, useState } from 'react'
import MainContent from '../components/MainContent'
import { Menu } from '../components/Menu'
// import { useLocation } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";


export const Dashboard = () => {
  // const [userData, setUserData] = useState(null);
  // const [userData, setUserData] = useState(null);
  // const location = useLocation();
  // const user = location.state.user;
    const [selection, setSelection] = useState(() => {
      const storedSelection = localStorage.getItem('selection');
      return storedSelection ? parseInt(storedSelection) : 1;
    }
    ) ;

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const db = getFirestore();
  //       const docRef = doc(db, "users",user); // replace "userUID" with actual user UID
  //       const docSnap = await getDoc(docRef);
  
  //       if (docSnap.exists()) {
  //         setUserData(docSnap.data());
  //       } else {
  //         console.log("No such document!");
  //       }
  //     };

  //     fetchData();
  // }, []);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const db = getFirestore();
    //     const docRef = doc(db, "users", user.uid);
    //     const docSnap = await getDoc(docRef);
    
    //     if (docSnap.exists()) {
    //       setUserData(docSnap.data());
    //     } else {
    //       console.log("No such document!");
    //     }
    //   };
    
    //   fetchData();
    // }, [user.uid]);

    useEffect(() => {
      // Save the count in localStorage whenever it changes
      localStorage.setItem('selection', selection.toString());
    }, [selection]);

    
  return (

    <>
        <div className="flex">
        {/* Navigation Bar */}
            <Menu selection={selection} setSelection={setSelection}/>
        {/* Main Components */}
          <MainContent selection={selection}/>
        </div>

        {/* <div>
      {userData && (
        <div>
          <p>Full Name: {userData.fullName}</p>
          <p>Email: {userData.email}</p>
          <p>Area: {userData.area}</p>
          <p>Country: {userData.country}</p>
          <p>Zip: {userData.zip}</p>
        </div>
      )}
    </div> */}
        

        

    </>
  )
}
