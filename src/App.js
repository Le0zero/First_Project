import React, {useState, useEffect} from 'react';
import BusMP4 from './bus.mp4'
import BusImage from './bus.jpeg'
import { Home, ParkingCircle, Bus, UserSquare2, Settings, ChevronLeft } from 'lucide-react';
 // Placeholder for expiry time
  
const TransitApp = () => {
  const [currentScreen, setCurrentScreen] = React.useState('home');
  const [transitPasses, setTransitPasses] = React.useState(1);
  const [selectedCity, setSelectedCity] = React.useState('Barrie');
  const [passUsesLeft, setPassUsesLeft] = React.useState(6);
  const [expiryTime, setExpiryTime] = React.useState('149');
  const userId = '1111152082';
  const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    const options = {
      weekday: 'short',  
      year: 'numeric',   
      month: 'short',    
      day: 'numeric'     
    };
    return(
        <div>
            <p> {date.toLocaleDateString('en-US', options).replace(/,/g,'')}</p>
            <p className='mt-2'> {date.toLocaleTimeString()}</p>

        </div>
    )
}
  const HomeScreen = () => (
    <div className="flex-1 px-6 py-4">
      <div className="text-center mb-6">
        <p className="text-gray-600 mb-2">My City</p>
        <div className="flex items-center justify-center">
          <span className="text-red-500 text-lg font-medium">{selectedCity}</span>
          <Settings className="ml-2 text-red-500" size={20} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-red-500 text-white py-3 px-6 rounded-full text-center">
          My Transit Passes: {transitPasses}
        </div>

        <button className="w-full text-red-500 text-center py-2">
          Purchase More
        </button>

        <button className="w-full text-red-500 text-center py-2">
          View History
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Please select a route</p>
        <button 
          className="bg-red-500 text-white py-3 px-12 rounded-full"
          onClick={() => setCurrentScreen('routeSelection')}
        >
          Continue
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-2">Need Help?</p>
        <button className="text-red-500">
          Plan My Trip
        </button>
      </div>

      <BusIllustration />
    </div>
  );
  const BusPass = () =>(
  <div className='bg-white justify-items-center items-center p-5'>
    <div className="flex flex-col items-center h-max mb-3 pb-12 bg-[#31658C] text-white rounded-3xl">
      <div className="text-center m-14">
        <p className="text-xl font-normal">Student 10 Ride Card</p>
        <p className="text-3xl font-bold mt-2">{DateTime()}</p>
      </div>

      <div className="text-center">
        <p className="text-lg">{'Barrie Transit'}</p>
      </div>

      <div>
        <video height='200' width='310' autoPlay="autoPlay" loop  muted>
          <source src={BusMP4} type="video/mp4" />
          </video>
          </div>
      

      <button className="bg-red-500 text-white font-medium py-2 px-8 rounded-full mt-4">
        Expire
      </button>

      <div className="text-center mt-6">
        <p className="text-2xl text-center font-semibold">This pass expires after {expiryTime} minutes</p>
        <p className="text-sm mt-2">User ID {userId}</p>
      </div>
    </div>
    <button className="bg-red-500 text-white font-medium py-2 px-8 rounded-full mt-4">
        Live Map
      </button>
    </div>
  )
  const RouteSelectionScreen = () => (
    <div className="flex-1 px-6 py-4">
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="text-center mb-4">
          <p className="text-gray-600 mb-2">My Route</p>
          <div className="flex items-center justify-center">
            <span className="text-red-500 text-xl font-medium">Barrie Transit</span>
            <Settings className="ml-2 text-red-500" size={20} />
          </div>
        </div>

        <div className="text-center mb-6">
          <button className="bg-red-500 text-white py-3 px-16 rounded-full w-64">
            Live Map
          </button>
        </div>

        <div className="text-center text-gray-600 mb-8 px-8">
          <p className="text-sm leading-relaxed">
            To Continue, please select your route above and click Board Bus just before boarding.
            Show the validated pass screen to the transit operator.
          </p>
        </div>

        <div className="text-center mb-4">
          <p className="text-gray-600 mb-2">My Pass</p>
          <div className="flex items-center justify-center">
            <span className="text-red-500 text-xl font-medium">Student 10 Ride Card</span>
            <Settings className="ml-2 text-red-500" size={20} />
          </div>
          <p className="text-gray-600 text-sm mt-2">
            You have {passUsesLeft} uses left on this pass
          </p>
        </div>

        <div className="text-center pb-6">
          <button className="bg-red-500 text-white py-3 px-16 rounded-full w-64" onClick={()=> setCurrentScreen('BusPass')}>
            Board Bus
          </button>
        </div>
      </div>

      <BusIllustration />
    </div>
  );

  const BusIllustration = () => (
   
            <img src={BusImage} alt="Bus" style={{width: '70%', display: 'block', margin: '0 auto'}} />
    
            
  );
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white ">
        <div className="flex items-center">
          <button className="p-2 mr-2">
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </div>
          </button>
          <button onClick={() => setCurrentScreen('home')}>
            <ChevronLeft size={24} />
          </button>
        </div>
        {currentScreen === 'routeSelection' && (
          <span className="text-gray-600 font-medium">Board Bus</span>
        )}
      </div>

      {/* Main Content */}
      {currentScreen === 'home' ? <HomeScreen /> : currentScreen === 'routeSelection' ? <RouteSelectionScreen /> : <BusPass />}

      {/* Navigation Bar */}
<div className="flex justify-around items-center p-4 bg-white border-t border-gray-200 sticky bottom-0 z-10">
<div>
  <button className="flex flex-col items-center justify-center text-gray-600 w-12 h-12 rounded-full bg-cyan-300 bg-opacity-10 ">
    <Home size={24} />
  </button>
    <span className="text-xs mt-1">Home</span>
  </div>
  <div>
  <button className="flex flex-col items-center justify-center text-gray-600 w-12 h-12 rounded-full bg-cyan-300 bg-opacity-10">
    <ParkingCircle size={24} />
  </button>
    <span className="text-xs mt-1">Parking</span>
  </div>
  <div>
  <button className="flex flex-col items-center justify-center text-cyan-500 w-12 h-12 rounded-full bg-cyan-300 bg-opacity-50 shadow-lg">
    <Bus size={24} />
  </button>
    <span className="text-xs mt-1">Transit</span>
  </div>
  <div>
  <button className="flex flex-col items-center justify-center text-gray-600 w-12 h-12 rounded-full bg-cyan-300 bg-opacity-10">
    <UserSquare2 size={24} />
  </button>
    <span className="text-xs mt-1">Permits</span>
  </div>
</div>
    </div>
  );
};

export default TransitApp;