import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
    return (
        <div className="app">

            <h1>React Profile Cards</h1>

            <div className="cards">

                <ProfileCard
  name="Viraj Khanvilkar"
  image={`${import.meta.env.BASE_URL}vrk.jpeg`}
  description="MCA student and aspiring Java Full Stack Developer."
/>

<ProfileCard
  name="Sarthak Patil"
  image={`${import.meta.env.BASE_URL}sp_img.jpeg`}
  description="Software developer interested in web technologies."
/>

<ProfileCard
  name="Sahil chougale"
  image={`${import.meta.env.BASE_URL}sk.jpeg`}
  description="Frontend developer interested in React and modern UI design."
/>
            </div>

        </div>
    );
}

export default App;