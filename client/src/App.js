import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Form from "./pages/Form";
import Layout from "./components/layout/Layout";
import AddNews from "./pages/AddNews";
import News from "./pages/News";

function App() {
  return (
          <Layout>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users"  element={<Users/>} />
            <Route path="/addUsers" element={<Form/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/addNews" element={<AddNews/>} />
        </Routes>
          </Layout>
      )
}

export default App;
