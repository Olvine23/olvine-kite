export const Step = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="sm:text-center">
            <div className="flex items-center justify-center  mb-2  font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
            <h6 className="text-black p-4 font-semibold leading-5">Start-up</h6>
            </div>  
          </div>
          <div className="sm:text-center">
          <div className="flex items-center justify-center mb-2  font-extrabold rounded-full text-deep-purple-accent-400 bg-green-500 sm:mx-auto">
          <h6 className="text-white text-2xl p-4 font-semibold leading-5">Delegator</h6>
            </div>
            
             
          </div>
          <div className="sm:text-center">
          <div className="flex items-center justify-center mb-2  font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
          <h6 className="text-black font-semibold p-4 leading-5">Delegator</h6>
            </div>

          </div>
        </div>
      </div>
    );
  };