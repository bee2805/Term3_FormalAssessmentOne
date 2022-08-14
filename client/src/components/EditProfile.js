import React from "react";

function EditProfile(props) {

    const closeModal = () => {
        props.rerender();
    }

    return(
        <div className="EditProfile">
            <div className="modal">
                <div className="close" onClick={closeModal}></div>
            </div>
        </div>
    );
}

export default EditProfile;