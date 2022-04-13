import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import search from '../search';
import {useRouter} from 'next/router';

function NFTDropPage () {
    const connectWithMetamask = useMetamask();
    const address = useAddress()

    // Auth

    const disconnect = useDisconnect()
    // --
    const router = useRouter()
    console.log(address)

  return (
    

      <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
          {/* Left */}
          <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
              <div className='flex flex-col items-center justify-cneter py-2 lg:min-h-screen'>
                  <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2'>
                    <img 
                        className='w-44 rounded-xl object-cover object-center'
                        src='https://links.papareact.com/8sg '
                        alt=''
                    />

                  </div>
              <div className='space-y-2 p-5 text-center'>
                  <h2 className='text-xl text-gray-300'>
                  <h1 className='text-4xl font-bold text-white'>Ramro kura garis Yaar</h1>
                      A Collection of NFT
                  </h2>

              </div>
                  
              </div>
          </div>


          {/* Right */}
          <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
              {/* Header */}
              <header className='flex items-center justify-between'> 
                  <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>The{' '}<span className='font-extrabold underline decoration-pink-600/50'>Twtamaris</span>{' '} NFT market place </h1>
                  <button onClick={() => (address? disconnect() : connectWithMetamask())} className='rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base'>
                       {address ? 'Sign Out' : 'Sign In'}
                  </button>
              </header>
              <hr className='my-2 border' />
              {address && (
                  <p>You're logged in with wallet {address.substring(0,5)}...{address.substring(address.length - 5)}</p>

              )}


              
              {/* Content */}

              <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 '>
                  <img className='w-80 object-cover pb-10 lg:h-40' src='https://links.papareact.com/bdy' alt=''></img>
                  <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The Twtamaris Coding NFT</h1>
                  <p className='pt-2 text-xl text-green-500'>13 / 21 NFT's claimed</p>
              </div>

              {/* Mint Button */}
              <button className='mt-10 h-16 w-full rounded-full bg-red-600 text-white 0'>
                  Mint NFT (0.01 ETH)
              </button>
              

          </div>

      </div>
  )
}

export default NFTDropPage