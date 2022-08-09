import {Route, Routes} from 'react-router-dom'

import ContactPage from "../../pages/contact/contactPage";
import HomePage from "../../pages/home/homePage";
import ProjectstPage from "../../pages/projects/projectsPage";
import React from "react";

const AppRouter = () => {
    return (

        <Routes>
            <Route exact path={'/'} element={<HomePage/>} />
            <Route exact path={'/contact'} element={<ContactPage/>} />
            <Route exact path={'/projects'} element={<ProjectstPage/>} />
           
        </Routes>
        
    );
}

export default AppRouter;