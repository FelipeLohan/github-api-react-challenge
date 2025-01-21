import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { HomePage } from "./components/HomePage";
import { SearchProfile } from "./routes/SearchProfile";
import { Form } from "./components/Form";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/search-profile" element={<SearchProfile />}>
            <Route index element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
