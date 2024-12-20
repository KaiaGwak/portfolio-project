import './styles/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import BoardList from './pages/board/BoardList'
import BoardWrite from './pages/board/BoardWrite'
import BoardDetail from './pages/board/BoardDetail'
import BoardEdit from './pages/board/BoardEdit'

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/board" element={<BoardList />} />
            <Route path="/board/write" element={<BoardWrite />} />
            <Route path="/board/:id" element={<BoardDetail />} />
            <Route path="/board/edit/:id" element={<BoardEdit />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </AppProvider>
  )
}

export default App