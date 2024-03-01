import { useState } from "react";

function Education() {
  const [information, setInformation] = useState({school_name: '', title_of_study: '', date_of_study: ''});
  const [update, setUpdate] = useState(true)
  function handleSubmit(e){
    e.preventDefault();
    setUpdate(false);
  }
  if(update) {
    return(
      <>
        <h3 className="text-secondary text-center">Education information</h3>
        <form onSubmit={handleSubmit} className="border border-1 p-3">
          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="md:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                School name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="school_name"
                  value = {information.school_name}
                  onChange={(e) => setInformation({...information, school_name: e.target.value})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Title of studies
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name"
                  value = {information.title_of_study}
                  onChange={(e) => setInformation({...information, title_of_study: e.target.value})}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Date of studies
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  id="name"
                  value = {information.date_of_study}
                  onChange={(e) => setInformation({...information, date_of_study: e.target.value})}
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
        <h2 className="font-bold text-xl mb-2">Education information</h2>
        <div  class="p-10">  
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">CV</div>
              <p class="text-gray-700 text-base">
                name : {information.school_name}<br/>
                email: {information.title_of_study}<br/>
                phone: {information.date_of_study}
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

export default Education;