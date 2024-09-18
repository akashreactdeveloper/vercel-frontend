import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import ForgotPassword from "../pages/ForgotPassword"
import Awl from "../pages/Awl"
import Crfm from "../pages/Crfm"
import Others from "../pages/Others"
import Slip from "../pages/Slip"
import AwlGatepass from "../pages/AwlGatepass"
import CrfmGatepass from "../pages/CrfmGatepass"
import Returnable from "../pages/Returnable"
import NonReturnable from "../pages/NonReturnable"
import GateManVerification from "../pages/GateManVerification"
import AllGatepasses from "../pages/AllGatepasses"
import AdminPanel from "../pages/AdminPanel"
import AllUsers from "../pages/AllUsers"
import HomeGatePasses from "../pages/HomeGatePasses"
import AwlExcelsheet from "../pages/AwlExcelsheet"
import CrfmExcelsheet from "../pages/CrfmExcelsheet"
import PracticeAWL from "../pages/PracticeAWL"
import Verification from "../pages/Verification"
import ChooseVerification from "../pages/ChooseVerification"

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Login/>
            },
            {
                path : "home",
                element : <Home/>
            },
            {
                path : "awlexcelsheet",
                element : <AwlExcelsheet/>
            },
            {
                path : "crfmexcelsheet",
                element : <CrfmExcelsheet/>
            },
            {
                path : "practiceawl",
                element : <PracticeAWL/>
            },
            {
                path : "signup",
                element : <SignUp/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassword/>
            },
            {
                path : "awl",
                element : <Awl/>
            },
            {
                path : "crfm",
                element : <Crfm/>
            },
            {
                path : "others",
                element : <Others/>
            },
            {
                path : "slip",
                element : <Slip/>
            },
            {
                path : "awlgatepass",
                element : <AwlGatepass/>
            },
            {
                path : "crfmgatepass",
                element : <CrfmGatepass/>
            },
            {
                path : "returnable",
                element : <Returnable/>
            },
            {
                path : "Nonreturnable",
                element : <NonReturnable/>
            },
            {
                path : "gatemanverfication",
                element : <GateManVerification/>
            },
            {
                path : "HomeGatePasses",
                element : <HomeGatePasses/>
            },
            {
                path : "verification",
                element : <Verification/>
            },
            {
                path : "chooseverification",
                element : <ChooseVerification/>
            },
           
            {
                path : "admin-portal",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "allgatepasses",
                        element : <AllGatepasses/>
                    },
                ]
            },
            
            


        ]
    }
])

export default router