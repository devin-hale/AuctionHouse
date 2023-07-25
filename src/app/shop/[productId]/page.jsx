"use client"
import itemData from './../../../data.JSON'
import Image from 'next/image'
import NavBar from '@/app/components/navBar'


const ProductDetail = ({ params }) => {
    const itemDB = itemData.items

    const item = itemDB.find(item => item.id == params.productId)

    return <>
    <NavBar />
    <div className=" border-2 bg-black border-white border-solid w-[80%] m-auto">
    <p>{item.name}</p>

        <Image className='m-auto rounded' width={100} height={100} src={item.img} alt="" />
    <div>
    <p className=" m-auto">{item.type}</p>
    <p>{item.stats1}</p>
    <p>{item.stats2}</p>
    </div>

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
    </div>
    </>
}

export default ProductDetail