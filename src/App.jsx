//@ts-nocheck
import { Buffer } from 'buffer';
import { Suspense, useEffect, useState } from 'react';
import { useNavigation, BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import UserAccess from './authentication/UserAccess';
import CategoryExplorePage from './pages/CategoryExplorePage';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import SearchPage from './pages/SearchPage';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import Spinner from './ui/Spinner';
import NumberSignUpPage from './pages/NumberSignUpPage';
import { PlayerProvider } from './Context/MusicPlayerContext';

function App() {
  const CLIENT_ID = '42050ac0bed043c4842448c81c2c977f';
  const CLIENT_SECRET = '2943185c32ea40f68cf2531cfe2c5739';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading((state) => !state);
    const fetchData = async () => {
      const data = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: new URLSearchParams({
          grant_type: 'client_credentials'
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
        }
      });
      const jsonData = await data.json();
      localStorage.setItem('token', jsonData.access_token);
    };
    fetchData();
  }, [CLIENT_ID, CLIENT_SECRET]);

  return (
    <PlayerProvider>
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <UserAccess>
                  <AppLayout />
                </UserAccess>
              }>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="search/:q" element={<CategoryExplorePage />} />
              <Route path="search/:q/:type" element={<CategoryExplorePage />} />
              <Route path="search/category/:q" element={<CategoryExplorePage />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="login/phone" element={<NumberSignUpPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </PlayerProvider>
  );
}

export default App;
