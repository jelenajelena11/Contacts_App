import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./components/search-bar/SearchBar";
import Sidebar from "./components/sidebar/Sidebar";
import ContactList from "./pages/all-contacts/ContactList";
import CreateContact from "./pages/create-contact/CreateContact";
import EditContact from "./pages/edit-contact/EditContact";
import Favorites from "./pages/favorites/Favorites";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
        <Sidebar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            margin: "0 32px",
            width: "100%",
          }}
        >
          <SearchBar />
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/edit-contact/:id" element={<EditContact />} />
            <Route path="/create-contact" element={<CreateContact />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
