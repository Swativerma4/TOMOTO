import React from 'react'
import '../ExploreMenu/ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu=({category,setCategory})=> {
  return (
    <div  className='explore-memu pl-28  ' id='explore-menu'>
    <h1 className='text-3xl font-bold '>Explore Our Menu</h1>
    <p className='explore-text pt-6 font-sans '>Choose from a diverse menu featuring a delectable array of dishes Our mission is to satisfy your cravings and elevate your<br></br> dining experience, one delicious meal at a time. </p>
    <div  className='explore-list flex gap-10 pt-8 text-center cursor-pointer'>
    {menu_list.map((item,index)=>{
        return( 
            <div onClick={()=>setCategory (prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='menu-list-item font-bold  cursor-pointer   '>
            <img  className={category===item.menu_name?"active border-[4px]  border-red-500 p-[2px] rounded-full ":""}src={item.menu_image} alt=''/>
                <p>{item.menu_name}</p>
            </div>
        )
    })}

    </div>
      
    </div>
  )
}
export default ExploreMenu
