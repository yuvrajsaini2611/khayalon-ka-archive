import React from 'react'

function Footer() {
  return (
    <div className='max-w-3xl mx-auto flex flex-col items-center px-8 py-12 border-t border-stone-200'>

        <p className='font-heading text-lg md:text-2xl'>लफ़्ज़ों में जो खो जाए, वो यहाँ मिल जाता है</p>
        <p className='font-ui text-xs text-gold'>Welcome to the caravan of thoughts!</p>

        {/* Divider */}
        <div className="flex items-center gap-4 text-gold my-8">
            <div className="h-px w-16 bg-gold opacity-40"></div>
            <span className="text-gold">✦</span>
            <div className="h-px w-16 bg-gold opacity-40"></div>
        </div>

        <div className='flex items-center justify-between w-full'>
            <p className='font-ui text-xs text-inklight'>&copy; 2026 Yuvii</p>

            <div className='flex gap-2'>
                <a href="https://www.google.com/" className='font-ui text-xs text-inklight hover:text-gold transition-colors duration-300'>GitHub</a>
                <a href="https://www.google.com" className='font-ui text-xs text-inklight hover:text-gold transition-colors duration-300'>Twitter</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
