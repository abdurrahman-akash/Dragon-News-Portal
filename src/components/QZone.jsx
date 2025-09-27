import swimmingImage from '../assets/swimming.png';
import classImage from '../assets/class.png';
import playImage from '../assets/playground.png';

const QZone = () => {
  return (
    <div className="space-y-4">
      <div className="bg-base-200 p-3 sm:p-4 rounded-lg">
        <h2 className="font-bold mb-4 sm:mb-5 text-lg sm:text-xl">QZone</h2>
        <div className="space-y-3">
          <img className="w-full h-auto rounded-lg" src={swimmingImage} alt="Swimming" />
          <img className="w-full h-auto rounded-lg" src={classImage} alt="Class" />
          <img className="w-full h-auto rounded-lg" src={playImage} alt="Playground" />
        </div>
      </div>
      
      <div className="bg-base-200 p-3 sm:p-4 rounded-lg text-center">
        <h3 className="font-bold mb-2 text-base sm:text-lg">Create an Amazing App</h3>
        <p className="mb-4 text-sm sm:text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn btn-primary text-xs sm:text-sm px-4 sm:px-6">Get Started</button>
      </div>
    </div>
  )
}

export default QZone
