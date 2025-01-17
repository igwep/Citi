import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Create a Context for Auth
const AuthContext = createContext();

// Create a provider for the Auth context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const db = getFirestore(); // Initialize Firestore

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true); // Set loading to true whenever auth state changes
      if (firebaseUser) {
        try {
          // Fetch user data from Firestore only when the user logs in
          const userDocRef = doc(db, "users", firebaseUser.uid); // 'users' collection
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              balance: userDocSnap.data().balance, // Fetch balance
              // Add other fields as needed
            };
            setUser(userData);

            console.log("Fetched user data on login:", userData); // Log for debugging
          } else {
            console.log("No user document found!");
            setUser(null);
          }
        } catch (err) {
          console.error("Error fetching user data: ", err);
          setError(err);
        }
      } else {
        // No user is logged in
        setUser(null);
      }
      setLoading(false); // Set loading to false after processing
    });

    // Clean up listener on unmount
    return () => unsubscribe();
  }, [db]);

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the AuthContext to be used in other components
export const useAuth = () => React.useContext(AuthContext);
