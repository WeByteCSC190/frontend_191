/* Put important imports below this comment */ 
import { Route, Routes } from "react-router-dom";

/* Put features imports below this comment */ 
import Navbar from "./components/page-format/Header/Navbar.jsx";

/* Put style imports below this comment */
import './components/page-format/Format/page-styles.css';

/* Put page imports below this comment */ 
import DashboardPage from "./components/main-pages/Dashboard/Dashboard.jsx";
import LeadsPage from "./components/main-pages/Leads/Leads.jsx";
import BorrowersPage from "./components/main-pages/Borrowers/Borrowers.jsx";
import LendersPage from "./components/main-pages/Lenders/Lenders.jsx";
import ResourcesPage from "./components/main-pages/Resources/Resources.jsx";
import AccountPage from "./components/main-pages/Account/Account.jsx"; 
import LogOutPage from "./components/sign-in-pages/LogOut";

/* 
   The purpose of App.js structures the website in front of the User 
   in the following:
   Header: Loads the Navbar. className is "sticky". 
   Body: Loads the content of the webpage. className is "content".
   Footer: Contains the credits (Ex. Powered by Liberty Wholesale Mortgage)
*/ 

function App() {
  return (
  <>
  <body>
    
    <div className="header-container"> 
    <Navbar />
    </div>

    <div className="content-container">
       <Routes>
         <Route path="/dashboard" element={<DashboardPage />} />
         <Route path="/leads" element={<LeadsPage />} />
         <Route path="/borrowers" element={<BorrowersPage />} />
         <Route path="/lenders" element={<LendersPage />} />
         <Route path="/resources" element={<ResourcesPage />} />
         <Route path="/account" element={<AccountPage />} />
       </Routes>
      </div>

      <div className="footer-container"> 
        <h3>Under Development by WeByte</h3>
     </div> 


   </body> 
  </>
  )
  }

export default App;



