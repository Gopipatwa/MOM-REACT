import React from 'react';
import Content from './Content';
import Dashboard from './Header/Dashboard';


// import 
const Homepage=({imageList})=>{
    return(
        <div>
            {/* home */}
            <div className="container my-4">
            <Dashboard imageListAll={imageList}/>
            </div>
            <div className="container my-5">
            <Content/>
            </div>
        </div>
    )
}
export default Homepage 