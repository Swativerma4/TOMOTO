import React from 'react'
import '../ExploreMenu/ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu=({category,setCategory})=> {
  return (
    <div  className='explore-menu 'id="explore-menu-1">
    <h1>Explore Our Menu</h1>
    <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>
    <div className='explore-menu-list'>
 
    
    {menu_list.map((item,index)=>{
        return( 
            <div className='explore-menu-list-item' onClick={()=>setCategory (prev=>prev===item.menu_name?"All":item.menu_name)}key={index} >
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
