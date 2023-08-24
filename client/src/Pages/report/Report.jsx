import React from 'react'
import Navbar from '../../components/navbra/Navbar'
import Footer from '../../components/footer/Footer'

function Report() {

    const Nav =() => ( 
            <>
            <div className="nav-report pb-7 flex gap-9">
                <p className="text-xl">BUG DETAILS</p>
                <p className="text-xl">BUG DESCRIPTION</p>
            </div>
            </>
    )
                

  return (
    <>
         <div className="programs">
            <header className=" sticky top-0 z-40">
            <Navbar />
            </header>
            <section className="programs">
                <div className="baner bg-secondary sticky top-0 z-[-100]  w-full h-60 flex justify-center items-center ">
                    <h1 className="text-4xl text-white font-bold">banner background</h1>
                </div>
                <div className="text-white w-2/3 m-auto px-28 py-10 h-50 bg-black  translate-y-[-120px]">
                        <form action="" className='' method="post">
                            <div className="title border-b-secondary border-b-2 p-8">
                                <p htmlFor="" className=" pb-2">Report title </p>
                                <input type="text" className="w-full h-10 rounded-md px-3" />
                            </div>
                            <div className="body py-7">
                                <Nav />
                                <div className="details grid gap-y-3 border-b-secondary border-b-2 grid-cols-2">
                                    <div className="p-2">
                                        <p className=" py-2">Scope</p>
                                        <input type="text" placeholder='Select a scope' className='w-full h-10 rounded-md px-3' />
                                    </div>
                                    <div className="p-2">
                                        <p className=" py-2">Bug type</p>
                                        <select name="Select bug type" id="" className='text-black w-full h-10 rounded-md px-3'>
                                            <option value="">adf</option>
                                            <option value="">adf</option>
                                            <option value="">adf</option>
                                        </select>
                                    </div>
                                    <div className="p-2 col-span-2">
                                        <p className=" py-2">Endpoint</p>
                                        <input type="text" className='w-full h-10 rounded-md px-3' />
                                    </div>
                                    <div className="p-2">
                                        <p className=" py-2">Vulnerable part</p>
                                        <select name="Select bug type" id="" className='text-black w-full h-10 rounded-md px-3'>
                                            <option value="">adf</option>
                                            <option value="">adf</option>
                                            <option value="">adf</option>
                                        </select>
                                    </div>
                                    <div className="p-2">
                                        <p className=" py-2">Part name</p>
                                        <input type="text"  className='w-full h-10 rounded-md px-3' />
                                    </div>
                                    <div className="p-2 col-span-2">
                                        <p className=" py-2">Payload</p>
                                        <input type="text" className='w-full h-10 rounded-md px-3' />
                                    </div>
                                    <div className="p-2 col-span-2">
                                        <p className=" py-2">Technical environment</p>
                                        <input type="text" placeholder='OS , BROWSER , TOOLS , ....' className='w-full h-10 rounded-md px-3' />
                                    </div>
                                    <div className="p-2 col-span-2">
                                        <p className=" py-2">Application fingerprint</p>
                                        <input type="text" className='w-full h-10 rounded-md px-3' />
                                    </div>
                                    <div className="p-2 col-span-2">
                                        <p className=" py-2">IPs used</p>
                                        <input type="text" className='w-full h-10 rounded-md px-3' />
                                    </div>
                                    <div className="p-2 col-span-2">                   
                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                    </svg>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" className="hidden" />
                                            </label>
                                        </div> 
                                    </div>


                                </div>
                                <div className="describe py-5">
                                    <Nav />
                                    <div className="flex flex-col gap-4">
                                        <h1 className="pb-7 text-xl text-secondary">BUG DESCRIPTION</h1>
                                        <textarea name="" id=""className='w-full p-4 text-black' cols="30" rows="10"></textarea>
                                        <p className="text-sm font-semibold">This program is eligible for report collaboration. You'll be able to invite collaborators once your report is submitted.</p>
                                        <div className="w-full m-auto">
                                            <button className="px-4 py-2 m-auto bg-secondary font-bold rounded-md">Submit Report</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                </div>
            </section>
            <footer className="">
                <Footer />
            </footer>
        </div>
    </>
  )
}

export default Report