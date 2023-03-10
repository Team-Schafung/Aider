import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from 'react-responsive'
import HomeRoute from './components/routes/HomeRoute';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 429px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 428px)' })

return (
  <div>
    {isDesktopOrLaptop && 
      <div className=''>
        <p className=''>Please use this app on phone</p>
      </div>}
    {isTabletOrMobile && <HomeRoute />}
  </div>
  );
}

export default App;
