import { useState } from "react";

function Experience() {
  const [information, setInformation] = useState({company_name: '', position_title: '', main_responsability: ''});
  const [update, setUpdate] = useState(true)
  function handleSubmit(e){
    e.preventDefault();
    setUpdate(false);
  }
  if(update) {
    return(
      <>
        <h3 className="text-secondary text-center">Experience information</h3>
        <form onSubmit={handleSubmit} className="border border-1 p-3">
          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="md:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                company name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="company_name"
                  value = {information.company_name}
                  onChange={(e) => setInformation({...information, company_name: e.target.value})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                position title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name"
                  value = {information.position_title}
                  onChange={(e) => setInformation({...information, position_title: e.target.value})}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Main responsability
              </label>
              <div className="mt-2">
                <textarea
                  
                  id="name"
                  value = {information.main_responsability}
                  onChange={(e) => setInformation({...information, main_responsability: e.target.value})}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </form>
      </>
    );
  } else {
    return(
      <div>
        <h2 className="font-bold text-xl mb-2">Experience information</h2>
        <div  class="p-10">  
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">CV</div>
              <p class="text-gray-700 text-base">
                name : {information.company_name}<br/>
                email: {information.position_title}<br/>
                phone: {information.main_responsability}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <button
              onClick={() => { setUpdate(true) } }
              className="mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
             
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Experience;