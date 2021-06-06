import React from "react";
function Note()
{
    var currYear=new Date().getFullYear();
    return (
        <div className="note">
            <h1>JavaScript and React.js</h1>
            <p>This was a amazing bootcamp by Shauya Sinha. We have covered everything from Scratch include Javascrict, React.js, HTML.</p>
        </div>
    );
}
export default Note; 