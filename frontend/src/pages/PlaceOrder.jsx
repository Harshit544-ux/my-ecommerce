import { useState } from 'react'
import { assets } from '../assets/assets'
import Title from '../component/Title'
import CartTotal from './CartTotal'
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
  const [method, setMethod] = useState('cod');
  const navigate=useNavigate();
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-3 pt-5 sm:pt-14 min-h-[80vh] border-t px-10 '>
      {/* ------------- Left side ----------------*/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-2'>
          <Title text1={'Delivery'} text2={'Information'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zipcode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone' />
      </div>

      {/* ------------ Right side --------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal checkoutLink="/orders" buttonText="Place Order" />

        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          {/* -------- Payment Method Section -------- */}
          <div className='flex flex-wrap items-start gap-3'>

            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? "bg-green-400" : ""}`}></p>
              <img src={assets.stripe_logo} className='h-5 ml-4' />
            </div>

            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? "bg-green-400" : ""}`}></p>
              <img src={assets.razorpay_logo} className='h-5 ml-4' />
            </div>

            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? "bg-green-400" : ""}`}></p>
              <p className='text-gray-500 text-sm font-medium ml-4'>Cash on Delivery</p>
            </div>

          </div>
        </div>


      </div>

    </div>
  )
}

export default PlaceOrder