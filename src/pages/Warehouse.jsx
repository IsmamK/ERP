import React from 'react'
import { FaWarehouse, FaPlus } from 'react-icons/fa'
const Warehouse = () => {
  return (
    <div className='flex flex-col gap-10 dark:text-white dark:bg-black'>
        
            <h1 className='text-4xl md:text-7xl lg:text-8xl flex'>
            <FaWarehouse className='mr-4' /> 
                Warehouses
                </h1>

{/*  Add Warehouse Button */}
<div>
      
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-blue-800 hover:bg-blue-400 text-white" onClick={()=>document.getElementById('my_modal_3').showModal()}>
        <FaPlus className='mr-4' />
Add Warehouse
</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    
    <h3 className="font-bold text-xl text-center">Add A New Warehouse</h3>
    <form id = "add-warehouse" className='flex flex-col gap-3 mt-5' onSubmit = {(e)=>{e.preventDefault()}}>
            
            <label className="input input-bordered flex items-center gap-2">
            
            <input type="text" className="grow" placeholder="Warehouse Name" />
            </label>
            

            <label className="input input-bordered flex items-center gap-2">
            
            <input type="text" className="grow" placeholder="Location" />
            </label>


            <label className="input input-bordered flex items-center gap-2">
            
            <input type="text" className="grow" placeholder="VAT No" />
            </label>


            <label className="input input-bordered flex items-center gap-2">
            
            <input type="text" className="grow" placeholder="CR No" />
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
      <th >Warehouse Name</th>
        <th >Warehouse Name</th>
        <th>Location</th>
        <th >VAT No.</th>
        <th >CR No.</th>
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
              <div className="font-bold">Warehouse 1</div>
            </div>
          </div>
        </td>
        <td className="dark:text-white">Area 1, Street 1, Saudia Arabia</td>
        <td className="dark:text-white">123456789012345</td>
        <td className="dark:text-white">9876543210</td>
        <td className="flex gap-3 dark:text-white">
         {/* EDIT MODAL */}

        <button className="btn btn-xs md:btn-sm btn-warning text-white" onClick={()=>document.getElementById('edit_modal').showModal()}>Edit</button>
        <dialog id="edit_modal" className="modal">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            
            <h3 className="font-bold text-xl text-center">Edit Warehouse 1</h3>
            <form id = "add-warehouse" className='flex flex-col gap-3 mt-5' onSubmit = {(e)=>{e.preventDefault()}}>
                    
                    <label className="input input-bordered flex items-center gap-2">
                    
                    <input type="text" className="grow" placeholder="Warehouse Name" value = "Warehouse 1"/>
                    </label>
                    

                    <label className="input input-bordered flex items-center gap-2">
                    
                    <input type="text" className="grow" placeholder="Location" value = "Area 1, Street 1, Saudia Arabia"/>
                    </label>


                    <label className="input input-bordered flex items-center gap-2">
                    
                    <input type="text" className="grow" placeholder="VAT No" value="123456789012345"/>
                    </label>


                    <label className="input input-bordered flex items-center gap-2">
                    
                    <input type="text" className="grow" placeholder="CR No" value = "9876543210"/>
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
    </tbody>
  </table>
</div>

</div>
    </div>
  )
}

export default Warehouse
