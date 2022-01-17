import iat from "../images/organizer/iat.png";
import kncc from "../images/organizer/kncc.jpeg"
import baraza from "../images/platinum sponsor/images.png"
import county from "../images/organizer/club.jpg"
import sa from '../images/industry partners/sa.png'
import monte from '../images/organizer/monte.jpeg'
import mih from '../images/innovation partner/mih.png';
import esc from '../images/organizer/esc.jpeg';
import travel from '../images/travel partner/travel.png';
export const Team = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Event Organizers
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
        <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-auto h-20 mb-2   shadow"
              src={iat}
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Infinity Access Techonoligies</p>
              <p className="text-sm text-gray-800"> Event Organizer</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-auto h-20 mb-2  shadow"
              src= {county}
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-bold">County Government Kakamega</h1>
              <p className="text-sm text-gray-800">Host Partner</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-auto h-20 mb-2  shadow"
              src= {baraza}
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Baraza Foundation</p>
              <p className="text-sm text-gray-800">Platinum Sponsor</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-auto  h-20 mb-2 "
              src= {kncc}
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">KNCCI</p>
              <p className="text-sm text-gray-800">PLatinum Sponsor</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-auto h-20 mb-2   shadow"
              src= {monte}
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Monterey Bay International Trade Association</p>
              <p className="text-sm text-gray-800">Platinum Sponsor</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover h-20 mb-2   shadow"
              src={sa}
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">South African Chmaber of Commerce</p>
              <p className="text-sm text-gray-800">Platinum Sponsor</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-auto h-20 mb-2   shadow"
              src= {esc}
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Magharibi Innovation Hub</p>
              <p className="text-sm text-gray-800">Innovation Partner</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-auto h-20 mb-2   shadow"
              src= {mih}
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Benedict Caro</p>
              <p className="text-sm text-gray-800">Frontend Developer</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-auto h-20 mb-2   shadow"
              src= {travel}
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Travel Catalogue</p>
              <p className="text-sm text-gray-800">Travel Partner</p>
            </div>
          </div>
        </div>
      </div>

      
    );
  };