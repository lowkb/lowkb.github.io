import './Main.css'
import { Router } from 'preact-router';
import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" />
      </Router>
    </Layout>
  );
}
