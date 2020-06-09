import React from 'react';
import { Header} from './components/Header/Header';
import { Team} from './components/Team/Team';
import { Footer } from './components/Footer/Footer';
import { TeamLeaders } from './components/TeamLeaders/TeamLeaders';

function App() {
  return ( <div className = "App" >
<Header />
<div>
<Team />
<TeamLeaders/>
</div>
<Footer />
    </div>
  );
}

export default App;