import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import SideDashboard from './components/sidedashboard';
import ClientManagement from './components/clientmanagement';
import ProjectManagement from './components/projectmanagement';
import ProductManagement from './components/productmanagement';
import DocumentManagement from './components/documentmanagement';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="flex-col h-screen bg-gray-300">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-row m-[3vh] rounded-md border-2 border-gray-800 p-4">
            <SideDashboard />
            <div className="flex-1 flex flex-col">
              <Routes>
                <Route path="/clients" element={<ClientManagement />} />
                <Route path="/projects" element={<ProjectManagement />} />
                <Route path="/products" element={<ProductManagement />} />
                <Route path="/documents" element={<DocumentManagement />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

