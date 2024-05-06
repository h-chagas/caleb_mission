import Link from 'next/link'
import React from 'react'
Link

const BookingBtn = () => {
  return (
    <div className={`text-center pt-4 my-10`}>
        <Link href="/contact" className='bg-[#88dbc8] hover:bg-[#69dbc1] text-white font-bold py-4 px-14 rounded-full sm:text-lg lg:text-2xl'>
            Book now
        </Link>
    </div>
  )
}

export default BookingBtn