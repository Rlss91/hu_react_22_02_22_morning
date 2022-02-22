import UserRow from "./components/UserRow";
import LoginForm from "./components/LoginForm.component";
import NavBar from "./components/NavBar";

function App() {
  let title = "Hello world";
  return (
    <div className="container">
      <NavBar />
      <h1>{title}</h1>
      <h2>h2</h2>
      {/* <UserRow></UserRow> */}
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
