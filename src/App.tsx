// import React, { useState } from "react";
// import axios from "axios";
// import LoginForm from "./Loginform";
// import Search from "./search";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from './about';

// const App: React.FC = () => {
//   const [isVerified, setIsVerified] = useState(false);
//   const [verificationError, setVerificationError] = useState("");

//   const handleFormSubmit = async (formData: { username: string; password: string }) => {
//     try {
//       const response = await axios.post("/login", formData);
//       console.log("Data sent to backend:", formData);

//       // Check the response from the backend and set the verification status accordingly
//       if (response.status === 200) {
//         setIsVerified(true);
//         setVerificationError("");
//       } else {
//         setIsVerified(false);
//         setVerificationError("Invalid credentials. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error sending data to backend:", error);
//       setIsVerified(false);
//       setVerificationError("Error sending data.");
//     }
//   };

//   return (
//     <div>
//       {isVerified ? (
//         <Search />
//       ) : (
//         <>
//           {/* Pass onFormSubmit function to the LoginForm */}
//           <LoginForm onFormSubmit={handleFormSubmit} />
//           {/* Display the verification error message, if any */}
//           {verificationError && <p>{verificationError}</p>}
//         </>
//       )}
//     </div>
//   );
// };

// export default App;











import React, { useState } from "react";
import axios from "axios";
import LoginForm from "./components/Loginform";
import Search from "./components/search";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [verificationError, setVerificationError] = useState("");

  const handleFormSubmit = async (formData: { username: string; password: string }) => {
    try {
      const response = await axios.post("/login", formData);
      console.log("Data sent to backend:", formData);

      // Check the response from the backend and set the verification status accordingly
      if (response.status === 200) {
        setIsVerified(true);
        setVerificationError("");
        console.log("success");
        window.location.href = '/search';
      } else {
        setIsVerified(false);
        setVerificationError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
      setIsVerified(false);
      setVerificationError("Error sending data.");
    }
  };

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm onFormSubmit={handleFormSubmit} />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
