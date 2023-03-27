import styles from './App.module.css';
import HomePage from '@containers/HomePage';
import  router from '../../routes/routesConfig';
import Header from '@components/Header';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <Routes>
        {router.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
