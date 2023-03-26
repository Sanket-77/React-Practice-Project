import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomePageComponent from "../HomePage/HomePageComponent";
import LoginComponent from "../Loginpage/LoginComponent";
import FeatureComp from "../Feature/FeatureComp";
import TheamBaseComp from "../TheamBaseComp";
import UserInformation from "../UserInformation";
import LoginComponent1 from "../Loginpage/LoginComponent1";
import DataCounter from "../ReduxExample/DataCounter";
import ParentCompo from "../PropsDrilling/ParentCompo";
import HigherOrderComponent from "../HigherOrderExample/HigherOrderComponent";
import CustomHookExample from "../CustomHooks/CustomHookExample";
import ClassCOmpoLifeCycleEx from "../ClassComponent/ClassCOmpoLifeCycleEx";

export default function NavigationComp(){
    const logOutHandeler = () => {

    }
    return(
        <>
            <BrowserRouter>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/Features">Features</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/Theam">Theam</Link>
                        <Link to="/userinfo">User Information</Link>
                        <Link to="/incdec">Inc Dec</Link>
                        <Link to="/Parent">ParentCompo</Link>
                        <Link to="/customHook">CustomHook</Link>
                        <Link to="/classcompo">ClassCompoLifeCycle</Link>
                        <Link to="/login" onClick={logOutHandeler}>LogOut</Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path ='/' element={<HomePageComponent/>}></Route>
                <Route path='/Features' element={<FeatureComp/>}></Route>
                <Route path='/login' element={<LoginComponent1/>}></Route>
                <Route path='/Theam' element={<TheamBaseComp/>}></Route>
                <Route path='/userinfo' element={<UserInformation/> }></Route>
                <Route path='/incdec' element={<DataCounter/> }></Route>
                <Route path='/Parent' element={<ParentCompo/> }></Route>
                <Route path='/customHook' element={<CustomHookExample/> }></Route>
                <Route path='/classcompo' element={<ClassCOmpoLifeCycleEx/> }></Route>
            </Routes>
            </BrowserRouter>
        </>
    );
}

