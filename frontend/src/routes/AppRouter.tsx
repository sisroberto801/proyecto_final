import {HashRouter, Route, Routes} from 'react-router-dom';
import CVPage from '../pages/CVPage';

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/cv" element={<CVPage/>}/>
        <Route path="/" element={<CVPage/>}/>
      </Routes>
    </HashRouter>
  );
};
