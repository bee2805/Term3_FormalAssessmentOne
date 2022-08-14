import React from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="App">

      {/* <EditProfile/> */}

      {/* List of Profiles */}
      <div className="profiles">
        <ProfileCard/>
      </div>{/* List of Profiles */}

      <div className="add_profiles">
        <h1>+ Add a profile</h1>
        <p>Please fill in your details!</p>

        <form>
          <input type="text" id="username" placeholder="Username..."/>
          <input type="text" id="name" placeholder="Name..."/>
          <input type="text" id="surname" placeholder="Surname..."/>

          <select id="gender">
            <option disabled selected hidden>Choose Gender...</option>
            <option>Male</option>
            <option>Female</option>
            <option>NB</option>
          </select>

          <input type="text" id="occupation" placeholder="Occupation..."/>
          <input type="number" id="age" placeholder="Age"/>
          <input type="number" id="height" placeholder="Height"/>
          <input type="number" id="weight" placeholder="Weight"/>

          <select id="eye_color">
            <option disabled selected hidden>Please select your eye color...</option>
            <option>Amber</option>
            <option>Blue</option>
            <option>Brown</option>
            <option>Green</option>
            <option>Hazel</option>
          </select>
          
          <input type="number" id="incomePM" placeholder="Monthly Income..."/>

          <select id="interestedIn">
            <option disabled selected hidden>Interested in...</option>
            <option>Men</option>
            <option>Women</option>
            <option>Either</option>
          </select>

        </form>

        <button>Submit!</button>

      </div>
    </div>
  );
}

export default App;
