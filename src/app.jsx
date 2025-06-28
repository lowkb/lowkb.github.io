import { Router } from 'preact-router';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}
