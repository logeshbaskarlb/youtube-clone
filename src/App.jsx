import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import RecommendedVideo from "./Component/RecommendedVideos";
import SearchPage from "./Component/SearchPage";
import "./App.css";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

const App = () => {
  return (
      <>
    <div className="app">
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/search/:searchTerm"  element={<SearchingPage/>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPages />} />
      </Routes>
      
      </BrowserRouter>
    </div>
    </>
  );
};

const HomePage = () => (
  <div className="app_page">
    <Sidebar />
    <RecommendedVideo />
  </div>
);

const SearchingPage = () => (
  <div className="app_page">
  <Sidebar />
  <SearchPage />
  </div>
)

const SearchPages = () => (
  <>
    <h1>Search page</h1>
  </>
);

export default App;
