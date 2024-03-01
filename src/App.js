import {Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Connect from './components/MainBarTags/connect/Connect';
import CBnews from './components/MainBarTags/cbNews/CBnews';
import About from './components/MainBarTags/about/About';
import Create from './components/MainBarTags/create/Create';
import View from './components/MainBarTags/view/View';
import Spotify from './components/MainBarTags/ucbpEpisodes/Spotify';
import UCBPepisodes from './components/MainBarTags/ucbpEpisodes/UCBPepisodes';
import ThanksModal from './components/MainBarTags/modals/ThanksModal';

import MainBar from './components/MainPageParts/mainBar/MainBar';
import BotBar from './components/MainPageParts/botBar/BotBar';
import MainPage from './components/MainPageParts/mainPage/MainPage';

import './App.css';



function App() {


  return (
    <div className="App">
      <MainBar></MainBar>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/view" element={<View />} />
        <Route exact path='/create' element={<Create/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/connect' element={<Connect/>} />
        <Route exact path='/news' element={<CBnews/>} />
        <Route exact path='/episodes' element={<Spotify/>} />
        <Route exact path='/UCBP' element={<UCBPepisodes/>} />
        <Route exact path='/thankyou' element={<ThanksModal/>}/>
      </Routes>
      <BotBar></BotBar>
    </div>
  );
}

export default App;
