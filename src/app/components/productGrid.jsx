"use client"
import itemData from './../../data.JSON'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from './cartSlice';

export const ProductGrid = () => {
  const cart = useSelector((state) => state.cart.value)
  const itemDB = itemData;
  const dispatch = useDispatch();

  console.log(cart)
  
  const ItemDiv = () => itemDB.items.map(item => {
    return <div key={item.id}>
      <div className='border-solid border-white border-2 h-[250px] grid grid-cols-1 m-auto text-center max-w-[250px]'>
        <p className=" m-auto">{item.name}</p>
        <Image className='m-auto' width={80} height={80} src={item.img} alt="" />
        <p className=" m-auto">{item.type}</p>
        <div className='flex flex-row flex-nowrap items-center m-auto w-[100%] h-[100%] justify-evenly border-solid border-white border-2'>
          <div className='flex flex-row flex-nowrap w-[50px] max-h-[20px] align-middle justify-evenly'>
          <p>{item.priceG}</p>
          <Image className='m-auto' height={20} width={20} src="/assets/goldIMG/Gold.webp" alt="Gold" />
          </div>
          <div className='flex flex-row flex-nowrap w-[50px] max-h-[20px] align-middle justify-evenly'>
          <p>{item.priceS}</p>
          <Image height={10} width={20} src="/assets/goldIMG/Silver.webp" alt="Silver" />
          </div>
          <div className='flex flex-row flex-nowrap w-[50px] max-h-[20px] align-middle justify-evenly'>
          <p>{item.priceC}</p>
          <Image height={10} width={20} src="/assets/goldIMG/Copper.webp" alt="Copper" />
          </div>
          
        </div>
        <div className=" m-auto">
          <button type="button" onClick={() => {
            dispatch(addProduct(item));
          }}>Add to Cart</button>
        </div>
      </div>
    </div>
  })

  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  m-auto'>
      <ItemDiv />
    </div>
  );
};
