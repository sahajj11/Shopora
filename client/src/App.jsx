import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomePage from "./pages/HomePage";


const App = () => {
  return (
    <BrowserRouter>
      

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}

        {/* Protected routes — wrap with ProtectedRoute */}
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Route> */}

        {/* Fallback */}
        {/* <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;