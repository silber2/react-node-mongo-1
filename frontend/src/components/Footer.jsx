import React from 'react'
import { Newsletter } from './Newsletter'

export default function Footer() {
  return (
    <footer>
        <div className='subContainer footerLeft'>
            <div className='footerLeft__logo'>Logo</div>
            <div>
                <span className="material-symbols-outlined">mail</span>
                <span className="material-symbols-outlined">mail</span>
            </div>
        </div>
       <Newsletter /> 
    </footer>
  )
}
