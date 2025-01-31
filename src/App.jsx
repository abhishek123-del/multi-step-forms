import PersonalInfo from "./components/PersInfo";
import Sidebar from "./components/sidebar";


function App() {

  return (
    <div className="container-sm mt-md-5">
      <div className="row">
        <Sidebar />
        <PersonalInfo/>
      </div>
    </div>




  );
}

export default App;
