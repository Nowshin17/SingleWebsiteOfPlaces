import React, {useState} from 'react';

export default function Sidebar() {
     const [isOpen, setIsOpen] = useState(false);

  return ( <>
  {!isOpen ? 
  (
  
    <button className="fixed  z-30 flex bg-blue-500 hover:bg-blue-700 text-white font-semibold py-4 px-5 border border-blue-700 
                    rounded-[12px] cursor-pointer right-10 top-20" onClick={() => setIsOpen(!isOpen)}>
                   + add new places
    </button>
    
  ) 
  :
  (

    <button className="text-xl text-white fixed top-4 left-[1215px] z-10 " onClick={() => setIsOpen(!isOpen)}>
      <button class="bg-gray-300 hover:bg-gray-400 text-blue-800 font-semibold py-3 px-6 rounded-[15px] flex flex-row">
        <div class="pt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg> 
        </div>
        <div>Back</div>
      </button> 
    </button>
    
  )
}
<br></br>

  <div>

  <div className={`top-0 left-0 fixed bg-gray-400 w-full h-full p-10 opacity-50  ${isOpen ? 'translate-x-0': 'translate-x-full'} `}> </div>
    <div className={`top-0 right-0 fixed bg-white w-[30vw] h-full p-10 ${isOpen ? 'translate-x-0': 'translate-x-full'} ease-in-out duration-300`}>
    

        

      <form class="w-full max-w-sm pt-14">

          <div class=" md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold" for="inline-full-name">
                  Divistion
                </label>
              </div>

              <div class="md:w-2/3 flex ">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-l-[8px] w-full py-4 px-10 text-gray-700 leading-tight 
                focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Type here"/>
                  
                  <button class="flex items-center justify-center px-4 bg-gray-200 rounded-r-[8px]">
                      <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24">
                          <path
                              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                          </path>
                      </svg>
                  </button>
                
              </div>
          </div>


      
      <div class=" md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold" for="inline-password">
            Distric
          </label>
        </div>

        <div class="md:w-2/3">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-[8px] 
          w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " placeholder="Type here"> 
        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg> 
      </button>

        <div id="dropdown" class=" hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
          <ul class="py-1" aria-labelledby="dropdownButton" >
            <li>
              <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
            </li>
          </ul>
        </div>
          {/* <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-[8px] 
          w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
          id="inline-password" type="password" placeholder="Type here"/> */}
        </div>
      </div>




    <div class=" md:items-center mb-6">
              <div>
                <label class="block text-gray-500 font-bold" for="inline-full-name">
                Popular Place
                </label>
              </div>
              <div class="md:w-2/3" >
                <div class="flex flex-row">
                <div > <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-[8px] 
                      w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " 
                      id="inline-password" type="text" placeholder="Popular Place 1" /></div>
                <div class="pt-2 pl-3">  <svg class="h-10 w-10 text-gray-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  
                      stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="8" y1="12" x2="16" y2="12" /></svg></div>
                      
                </div>


                <div class="flex flex-row pt-1">
                <div > <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-[8px] 
                      w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " 
                      id="inline-password" type="text" placeholder="Popular Place 1" /></div>
                <div class="pt-2 pl-3"> <svg class="h-10 w-10 text-gray-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  
                      stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="8" y1="12" x2="16" y2="12" /></svg></div>
                      
                </div>
                 
                    <div class="pt-1">
                      <button class=" text-center bg-gray-200 border-dashed border-2 border-indigo-600 border-[#b3b4b7] rounded-[8px] 
                        w-full  py-4 px-6 text-[#808082] leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="inline-password" type="button" placeholder="+ add a place">+ add a place</button>
                      </div>
              </div>
           
    </div>






    <div class=" md:items-center mb-6">
              <div >
                <label class="block text-gray-500 font-bold" for="inline-full-name">
                Packeges
                </label>
              </div>

                <label class="block text-gray-500 font-bold flex flex-row ">
                    <div class="text-sm ">
                      <div class="box-border h-[70px] w-20 p-4 border-2 bg-[#ff93eb] rounded-[8px]"> </div>
                    </div>
                    <div class="text-sm pt-4 pl-4 ">
                       <div class="text-orange-400 text-[17px]">Packege 1</div> 
                       <div>BDT 300.00</div> 
                    </div>
                    <div  class="text-sm pt-7 pl-20"> <input class="mr-2 leading-tight " type="checkbox"/> </div>
                      
                </label>

                <label class="block text-gray-500 font-bold flex flex-row pt-1 ">
                    <div class="text-sm ">
                      <div class="box-border h-[70px] w-20 p-4 border-2 bg-[#adede8] rounded-[8px]"> </div>
                    </div>
                    <div class="text-sm pt-4 pl-4 ">
                       <div class="text-orange-400 text-[17px]">Packege 2</div> 
                       <div>BDT 400.00</div> 
                    </div>
                    <div  class="text-sm pt-7 pl-20"> <input class="mr-2 leading-tight " type="checkbox"/> </div>
                      
                </label>

                {/* <label class="block text-gray-500 font-bold flex flex-row ">
                    <div class="text-sm ">
                      <div class="box-border h-[70px] w-20 p-4 border-2 bg-[#ff93eb] rounded-[8px]"> </div>
                    </div>
                    <div class="text-sm pt-4 pl-4 ">
                       <div class="text-orange-400 text-[17px]">Packege 3</div> 
                       <div>BDT 300.00</div> 
                    </div>
                    <div  class="text-sm pt-7 pl-20"> <input class="mr-2 leading-tight " type="checkbox"/> </div>
                      
                </label>


                <label class="block text-gray-500 font-bold flex flex-row ">
                    <div class="text-sm ">
                      <div class="box-border h-[70px] w-20 p-4 border-2 bg-[#ff93eb] rounded-[8px]"> </div>
                    </div>
                    <div class="text-sm pt-4 pl-4 ">
                       <div class="text-orange-400 text-[17px]">Packege 4</div> 
                       <div>BDT 300.00</div> 
                    </div>
                    <div  class="text-sm pt-7 pl-20"> <input class="mr-2 leading-tight " type="checkbox"/> </div>
                      
                </label> */}
    </div>

    




      <div class="md:flex md:items-center">
        
        <div class="pl-24">
            <button class=" text-blue-400  font-semibold pr-5  " type="button">
              CANCEL
              </button>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-4 px-10 border border-blue-700 rounded-[14px] cursor-pointer" type="button">
                SUBMIT
              </button>
        </div>
      </div>


  </form>


  </div>
    
</div>
</>
  )
 
}

<script src="../path/to/@themesberg/flowbite/dist/flowbite.bundle.js"></script>;
<script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js"></script>;
