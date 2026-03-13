import Header from "./Components/Header.jsx"
import Skills from "./Components/Skills.jsx"
import Profile from "./Components/Profile.jsx"
import Project from "./Components/Project.jsx"
import Footer from "./Components/Footer.jsx"
import RemoteUsers from "./Components/RemoteUsers.jsx";

function App() {

  return (
      <div className="bg-[#F9F9F9] dark:bg-[#001f24]">
        <Header />
        <Skills />
        <Profile />
        <Project />
        <Footer />
        <RemoteUsers />
      </div>
  )
}

export default App
