import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import { getCurrentRoute } from '@/utils/navigation';
import { useEffect, useState } from 'react';

function App() {
  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute());

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(getCurrentRoute());
    };

    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  const renderRoute = () => {
    switch (currentRoute) {
      case '#login':
        return <Login />;
      case '#signup':
        return <Signup />;
      case '#forgot-password':
        return <ForgotPassword />;
      default:
        return (
          <>
            <Hero />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>{renderRoute()}</main>
    </div>
  );
}

export default App;