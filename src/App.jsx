import UserRow from "./components/UserRow";
import LoginForm from "./components/LoginForm.component";
import NavBar from "./components/NavBar";
import PanelCard from "./components/PanelCard.component";
import UsersTable from "./components/usersTargil/UsersTable";
import UseEffect from "./components/useEffect/UseEffect";
import TimeComponent from "./components/Time.component";
import TimeWrap from "./components/TimeWrap.component";

function App() {
  let title = "Hello world";
  return (
    <div className="container">
      <NavBar />
      {/* <h1>{title}</h1> */}
      {/* <h2>h2</h2> */}
      {/* <UserRow></UserRow> */}
      {/* <LoginForm></LoginForm> */}
      {/* <PanelCard></PanelCard> */}
      {/* <UsersTable></UsersTable> */}
      {/* <UseEffect></UseEffect> */}
      {/* <TimeComponent></TimeComponent> */}
      <TimeWrap></TimeWrap>
    </div>
  );
}

export default App;
