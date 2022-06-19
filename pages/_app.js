import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import store from '../Store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../Theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer/index';
import CryptoJS from 'crypto-js';

function MyApp({ Component, pageProps }) {
  // theme state
  const [theme, setTheme] = useState({ mode: "" });

  //navigator
  const navigate = useRouter();

  //check theme on component rendered
  useEffect(() => {
    setTheme({ mode: localStorage.getItem("theme") });
    try {
      //fetch the user cache 
      const bytes = CryptoJS.AES.decrypt(localStorage.getItem("princelab"), Secret());
      console.log(bytes)
      const originalSession = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      setUserCache(originalSession);
    } catch (error) {
      navigate.push("/");
    }

  }, []);

  //track the theme update using redux
  store.subscribe(() => setTheme({
    mode: store.getState().changeTheme === "unset" ?
      localStorage.getItem("theme") : store.getState().changeTheme
  }));


  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {
          theme.mode === "dark" ? <DarkTheme /> : null
        }
        <Component {...pageProps} />
        <Navbar />
        <Footer />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
