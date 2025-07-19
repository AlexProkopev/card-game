import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { ROUTES_NAV } from "./routes/routes";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        {ROUTES_NAV.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
