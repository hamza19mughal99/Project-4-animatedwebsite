import React from 'react';
import "./mainsection.css";
import mylogo from "../assests/images/my Logo.png"
function Footer() {
    return (
        <div>
            <div className="footer">
                <div>
                    CopyRights Reserved @
                </div>
                <div>
                    <img src={mylogo} width="40px" alt="img" />
                </div>
            </div>
        </div>
    );
}

export default Footer;