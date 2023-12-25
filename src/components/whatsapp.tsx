'use client'

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

declare const gtag: any

export default function WhatsappButton(){
    return (
        <Link 
            href="https://wa.me/554330279393"
            target="_blank" 
            onClick={()=>{
              gtag('event', 'conversion', {
                'send_to': 'AW-11223366543/OWCNCM2zxcsYEI_32-cp',
              });
            }}
            className='fixed right-6 md:right-8 bottom-6 md:bottom-8 bg-green text-white rounded-full text-3xl md:text-4xl p-2 z-50'
          >
            <FaWhatsapp />
          </Link>
    )
}