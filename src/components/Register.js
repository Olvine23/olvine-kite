export const Step = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3 sm:cols-3">
          <div className="sm:text-center">
            <div className="flex items-center justify-center hover:bg-green-300  md:mb-2 mb-0 font-extrabold rounded-full text-deep-purple-accent-400 bg-green-500 sm:mx-auto">
            <a href="/" className="text-white text-2xl hover:text-red-500 md:p-4 p-2 font-semibold leading-1">Start-up</a>
            </div>  
          </div>
          <div className="sm:text-center">
          <div className="flex items-center justify-center mb-2 hover:bg-green-300 font-extrabold rounded-full text-deep-purple-accent-400 bg-green-500 sm:mx-auto">
          <a href="/" className="text-white hover:text-red-500 text-2xl p-4 font-semibold leading-5">Exhibitor</a>
            </div>
            
             
          </div>
          <div className="sm:text-center">
          <div className="flex items-center justify-center mb-2  font-extrabold rounded-full   hover:bg-green-300 hover:text-red-500 bg-green-500 sm:mx-auto">
          <a href="/" className="text-white hover:text-red-500 font-semibold p-4 text-2xl leading-5">Delegator</a>
            </div>

          </div>
        </div>
      </div>
    );
  };