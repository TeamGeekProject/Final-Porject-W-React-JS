// import React from "react";
// import { auth } from "../firebase/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signOut,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { useState } from "react";

// export const Auth = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   console.log(auth?.currentUser?.email);

//   const SingUp = async () => {
//     await createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);

//         // ..
//       });
//   };

//   const SingIn = async () => {
//     await signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user);

//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       });
//   };

//   const logOut = async () => {
//     await signOut(auth)
//       .then(() => {
//         // Sign-out successful.
//         console.log("Sign-out successful.");
//       })
//       .catch((error) => {
//         // An error happened.
//         console.log("An error happened.");
//       });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Username"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={SingIn}>SingIn</button>
//       <button onClick={SingUp}>SingUp</button>
//       <button onClick={logOut}>Logout</button>
//     </div>
//   );
// };
