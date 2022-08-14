import React, { useState } from "react";
import EditProfile from "./EditProfile";

function ProfileCard() {

    const [modal, setModal] = useState();

    const viewProfile = () => {
        setModal(<EditProfile rerender={setModal}/>);
    }

    return(
        <>
        {modal}
        <div className="ProfileCard">
            
            <div className="username">
                <h3>BaxMax</h3>
            </div>

            <div className="bio">
                <p><strong>Name: </strong>Max</p>
                <p><strong>Surname: </strong>Baxter</p>
                <p><strong>Occupation: </strong>Florist</p>

                <button onClick={viewProfile}>View Profile</button>
            </div>

        </div>
        </>
    );
}

export default ProfileCard;