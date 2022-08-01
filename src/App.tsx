import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import SearchBar from "./components/search-bar/SearchBar";
import Sidebar from "./components/sidebar/Sidebar";
import ContactList from "./pages/all-contacts/ContactList";
import CreateContact from "./pages/create-contact/CreateContact";
import EditContact from "./pages/edit-contact/EditContact";
import Favorites from "./pages/favorites/Favorites";
import "./App.scss";

function App() {
  const [isDeletedContact, setIsDeletedContact] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [contactsByLabel, setContactsByLabel] = useState([]);

  return (
    <Router>
      <div className="app__container">
        <Sidebar
          isDeletedContact={isDeletedContact}
          isFavorite={isFavorite}
          isCreated={isCreated}
          setContactsByLabel={setContactsByLabel}
        />
        <div className="app__right_wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <ContactList
                  setIsDeletedContact={setIsDeletedContact}
                  setIsFavorite={setIsFavorite}
                  isFavorite={isFavorite}
                  contactsByLabel={contactsByLabel}
                />
              }
            />
            <Route path="/edit-contact/:id" element={<EditContact />} />
            <Route
              path="/create-contact"
              element={
                <CreateContact
                  isCreated={isCreated}
                  setIsCreated={setIsCreated}
                />
              }
            />
            <Route
              path="/favorites"
              element={<Favorites setIsDeletedContact={setIsDeletedContact} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
