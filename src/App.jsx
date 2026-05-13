import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import FavoriteCompanies from "./components/FavoriteCompanies";
import FavoriteJobs from "./components/FavoriteJobs";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/favorites/companies" element={<FavoriteCompanies />} />
        <Route path="/favorites/jobs" element={<FavoriteJobs />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
