import React from 'react'
import { FaStore, FaPlus } from 'react-icons/fa'


const Stores = () => {
    return (
      <div className='flex flex-col gap-10 dark:text-white dark:bg-black'>
          
              <h1 className='text-4xl md:text-7xl lg:text-8xl flex'>
              <FaStore className='mr-2' /> Stores

                  </h1>
  
  {/*  Add Warehouse Button */}
  <div>
        
  {/* You can open the modal using document.getElementById('ID').showModal() method */}
  <button className="btn bg-blue-800 hover:bg-blue-400 text-white" onClick={()=>document.getElementById('my_modal_3').showModal()}>
          <FaPlus className='mr-4' />
  Add Store
  </button>
  <dialog id="my_modal_3" className="modal">
    <div className="modal-box">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      
      <h3 className="font-bold text-xl text-center">Add A New Store</h3>
      <form id = "add-warehouse" className='flex flex-col gap-3 mt-5' onSubmit = {(e)=>{e.preventDefault()}}>
              
              <label className="input input-bordered flex items-center gap-2">
              
              <input type="text" className="grow" placeholder="Store Name" />
              </label>
              
  
              <label className="input input-bordered flex items-center gap-2">
              
              <input type="text" className="grow" placeholder="Store Location" />
              </label>
  
  
              <label className="input input-bordered flex items-center gap-2">
              
              <input type="text" className="grow" placeholder="VAT No" />
              </label>
  
  
              <label className="input input-bordered flex items-center gap-2">
              
              <input type="text" className="grow" placeholder="CR No" />
              </label>
              
              <label className="input input-bordered flex items-center gap-2">
              
              <input type="text" className="grow" placeholder="Point of Contact" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
              
              <input type="text" className="grow" placeholder="Whatsapp No" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
              
              <input type="text" className="grow" placeholder="Email" />
              </label>
              <div className='text-center'>
                      <button className='btn bg-green-400 hover:bg-green-600 hover:text-white text-gray-800 font-bold'>
  
                      <FaPlus className='' />
  
                          ADD
                          
                          </button>
              </div>
      </form>
    </div>
  </dialog>
          </div>
  
  <div className="overflow-x-auto dark:bg-black">
  
  
  <div className="overflow-x-auto dark:bg-black">
    <table className="table w-full dark:bg-gray-100 dark:text-white">
      {/* head */}
      <thead className="dark:bg-gray-100">
        <tr className="dark:bg-gray-100 dark:text-black">
 
            <th>Inventory</th>
          <th >Store Name</th>
          <th>Store Location</th>
          <th >VAT No.</th>
          <th >CR No.</th>
          <th>Point of Contact</th>
          <th>Whatsapp Number</th>
          <th>Email</th>
          <th >Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="dark:bg-gray-600">
            <td>
      
                 <button className="btn btn-xs md:btn-sm btn-success text-white" >Track Inventory</button>
             
                    
            </td>
          <td className="dark:text-white">
            <div className="flex items-center gap-3">
              <div>
                <div className="font-bold">Store 1</div>
              </div>
            </div>
          </td>
          <td className="dark:text-white">Store Area 1, Street 1, Saudia Arabia</td>
          <td className="dark:text-white">123456789012345</td>
          <td className="dark:text-white">9876543210</td>
          <td>Mr John Doe</td>
          <td>9200 XXXXX`</td>
          <td>example@example.com</td>
          <td className="flex  gap-3 dark:text-white items-center">
           {/* EDIT MODAL */}


                    <button className="btn btn-xs md:btn-sm btn-warning text-white" onClick={()=>document.getElementById('edit_modal').showModal()}>Edit</button>
                    <dialog id="edit_modal" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        </form>
                        <h1 className='font-bold text-2xl text-center'>Edit Store 1</h1>
                        <form id = "add-warehouse" className='flex flex-col gap-3 mt-5' onSubmit = {(e)=>{e.preventDefault()}}>
                        
                        <label className="input input-bordered flex items-center gap-2">
                        
                        <input type="text" className="grow" placeholder="Store Name" />
                        </label>
                        
            
                        <label className="input input-bordered flex items-center gap-2">
                        
                        <input type="text" className="grow" placeholder="Store Location" />
                        </label>
            
            
                        <label className="input input-bordered flex items-center gap-2">
                        
                        <input type="text" className="grow" placeholder="VAT No" />
                        </label>
            
            
                        <label className="input input-bordered flex items-center gap-2">
                        
                        <input type="text" className="grow" placeholder="CR No" />
                        </label>
                        
                        <label className="input input-bordered flex items-center gap-2">
                        
                        <input type="text" className="grow" placeholder="Point of Contact" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                        
                        <input type="text" className="grow" placeholder="Whatsapp No" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                        
                        <input type="text" className="grow" placeholder="Email" />
                        </label>
                        <div className='text-center'>
                                <button className='btn bg-green-400 hover:bg-green-600 hover:text-white text-gray-800 font-bold'>
            
                                <FaPlus className='' />
            
                                    ADD
                                    
                                    </button>
                        </div>
                        </form>

                        </div>
                        </dialog>
                            
                        {/* DELETE MODAL */}
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-xs md:btn-sm btn-error text-white" onClick={()=>document.getElementById('delete_modal').showModal()}>Delete</button>
                                <dialog id="delete_modal" className="modal">
                                <div className="modal-box dark:text-black">
                                    <h3 className="font-bold text-lg">ARE YOU SURE? </h3>
                                    <p className="py-4">You are about to delete this warehouse. Are you sure you want to delete?</p>
                                    <div className="modal-action">
                                    <form method="dialog" className='flex gap-3 '>
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-error text-white">Delete</button>
                                        <button className="btn btn-warning text-white">Cancel</button>
                                    </form>
                                    </div>
                                </div>
                                </dialog>
                
                
          </td>
        </tr>

        {/* DUMMY ROWS */}

        <tr className="dark:bg-gray-600">
        <td>
      
      <button className="btn btn-xs md:btn-sm btn-success text-white" >Track Inventory</button>
  
         </td>
          <td className="dark:text-white">
            <div className="flex items-center gap-3">
              <div>
                <div className="font-bold">Store 2</div>
              </div>
            </div>
          </td>
          <td className="dark:text-white">Store Area 2, Street 1, Saudia Arabia</td>
          <td className="dark:text-white">123456789012345</td>
          <td className="dark:text-white">9876543210</td>
          <td>Mr John Doe</td>
          <td>9200 XXXXX`</td>
          <td>example@example.com</td>
          <td className="flex gap-3 dark:text-white items-center">
            <button className="btn btn-xs md:btn-sm btn-warning text-white" onClick={() => document.getElementById('edit_modal').showModal()}>
              Edit
            </button>
            <button className="btn btn-xs md:btn-sm btn-error text-white" onClick={() => document.getElementById('delete_modal').showModal()}>
              Delete
            </button>
          </td>
        </tr>

        <tr className="dark:bg-gray-600">
        <td>
      
      <button className="btn btn-xs md:btn-sm btn-success text-white" >Track Inventory</button>
  
         </td>
          <td className="dark:text-white">
            <div className="flex items-center gap-3">
              <div>
                <div className="font-bold">Store 3</div>
              </div>
            </div>
          </td>
          <td className="dark:text-white">Store Area 3, Street 1, Saudia Arabia</td>
          <td className="dark:text-white">123456789012345</td>
          <td className="dark:text-white">9876543210</td>
          <td>Mr John Doe</td>
          <td>9200 XXXXX`</td>
          <td>example@example.com</td>
          <td className="flex gap-3 dark:text-white items-center">
            <button className="btn btn-xs md:btn-sm btn-warning text-white" onClick={() => document.getElementById('edit_modal').showModal()}>
              Edit
            </button>
            <button className="btn btn-xs md:btn-sm btn-error text-white" onClick={() => document.getElementById('delete_modal').showModal()}>
              Delete
            </button>
          </td>
        </tr>

        <tr className="dark:bg-gray-600">
        <td>
      
      <button className="btn btn-xs md:btn-sm btn-success text-white" >Track Inventory</button>
  
         </td>
          <td className="dark:text-white">
            <div className="flex items-center gap-3">
              <div>
                <div className="font-bold">Store 4</div>
              </div>
            </div>
          </td>
          <td className="dark:text-white">Store Area 4, Street 1, Saudia Arabia</td>
          <td className="dark:text-white">123456789012345</td>
          <td className="dark:text-white">9876543210</td>
          <td>Mr John Doe</td>
          <td>9200 XXXXX`</td>
          <td>example@example.com</td>
          <td className="flex gap-3 dark:text-white items-center">
            <button className="btn btn-xs md:btn-sm btn-warning text-white" onClick={() => document.getElementById('edit_modal').showModal()}>
              Edit
            </button>
            <button className="btn btn-xs md:btn-sm btn-error text-white" onClick={() => document.getElementById('delete_modal').showModal()}>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  </div>
      </div>
    )
  }
export default Stores
