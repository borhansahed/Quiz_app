import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/quiz/:id"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/result/:id" element={<Result />}></Route>
            <Route path="*" element={<Navigate to={"/signup"} />}></Route>
          </Routes>
        </Layout>
      </AuthProvider>
      {/* <Home /> */}
      {/* <Signup /> */}
      {/* <Quiz /> */}
      {/* <Result /> */}
    </>
  );
}

export default App;
