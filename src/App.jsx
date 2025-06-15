import { useState } from "react";
import { NavigationBar } from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { UserAuthForm } from "./components/UserAuthForm";
import { Home } from "./components/Home";
import { Separator } from "./components/Separator";
import { DisplayCards } from "./components/DisplayCards";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <NavigationBar />
      <Home />
      <Separator />
      <DisplayCards />
      <Routes>
        <Route>
          <Route path="signin" element={<UserAuthForm type="Sign-In" />} />
          <Route path="signup" element={<UserAuthForm type="Sign-Up" />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
