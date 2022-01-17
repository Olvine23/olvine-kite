import stadium from '../images/organizer/ll.jpg';

export const Content = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-white">
            <div className="max-w-xl mb-6 ">
              <h2 className="max-w-lg mb-6 text-black ml-6   text-4xl font-bold tracking-tight md:text-5xl sm:leading-none">
                Overview <span className='text-red-500'>and</span> outline of
                <br className="hidden md:block" />
                the <span className="text-green-500">event</span> {' '}
                 
              </h2>
              <p className="text-base text-gray-800 ml-6 md:text-lg">
              The Hybrid event being the first ever (Inaugural) hosted in Kakamega county targeting
              the audience of : <span className="font-bold">companies, startups, entreprenuers, international business, women owned
              entreprises/groups, manufacturers, young innovation and technology enthusiasts,startup founders, innovators, content creators, creative artists, designers including established
              companies/entities/businesses that want exposure for their products and services. </span> <br /> The
              mentioned scope of participants being from <span className='font-bold text-green-500'>Kakamega county, Kenya wide and
              international. </span>This is the expected audience as the location and the branding effect shall
              be ernormous.Investors and financial institutions are in pipeline to participate including
              government agencies helping develop entreprenuers either through training,mentorship
              and financing or other resources.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white md:ml-6 border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5 text-red-600">
                    I'll be sure to note that in my log
                  </h6>
                  <p className="text-sm text-green-500">
                    Lookout flogging bilge rat main sheet bilge water nipper fluke
                    to go on account heave down.
                  </p>
                </div>
              </div>
              <div className="bg-white md:mr-6 border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5 text-red-600">
                    A business big enough that it could be listed
                  </h6>
                  <p className="text-sm text-green-600">
                    Those options are already baked in with this model shoot me an
                    email clear.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 mt-14 rounded shadow-lg sm:h-96"
              src= {stadium}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };