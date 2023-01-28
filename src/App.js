import './App.css';
import GoodMorning from './GoodMorning';
import GoodNight from './GoodNight';

// Greet Based on Time of Day!
function App() {

  //Define Time of Day
  let timeofDay = "night"

  return (
    <div className='App'>

      {(timeofDay==="morning" || timeofDay==="afternoon") && 
      <GoodMorning
      timeOfDay={timeofDay}
      /> }

      {(timeofDay==="night") && <GoodNight/> }

    </div>
  );
}

export default App;
