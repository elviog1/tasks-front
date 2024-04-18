import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import ProfilePage from "./pages/ProfilePage";
import TaskFormPage from "./pages/TaskFormPage";
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";
import TasksApprovedPage from "./pages/TasksApprovedPage";
import TasksRejectedPage from "./pages/TasksRejectedPage";
import TasksPendingPage from "./pages/TasksPendingPage";
import TaskUpdatePage from "./pages/TaskUpdatePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <TaskProvider>
        <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/tasks/approved" element={<TasksApprovedPage />} />
              <Route path="/tasks/rejected" element={<TasksRejectedPage />} />
              <Route path="/tasks/pending" element={<TasksPendingPage />} />
              <Route path="/tasks/:id" element={<TaskUpdatePage />} />
              <Route path="/tasks/new" element={<TaskFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </TaskProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
