import ProfileCard from "./ProfileCard";
import "./App.css"; 


export default function App() {
  const hobby1 = ["Reading", "Cooking"];
  const hobby2 = ["Gaming", "Traveling"];

  const handleHobbyClick = (hobby) => {
    alert(`You clicked on: ${hobby}`);
  }
  
  return (
    <div className="App">
      <h1 className="title">Profile Cards</h1>
      <div className="profile-cards-container">
        <ProfileCard name="Harsh" age={19} isMember={true} hobbies={hobby1} onHobbyClick={handleHobbyClick}/>
        <ProfileCard name="Ravi" age={20} isMember={false} hobbies={hobby2} onHobbyClick={handleHobbyClick}/>
      </div>
    </div>
  );
}