import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'

const BarcodeScanner = () => {
  const[result,setResult] =useState('No Result')

    const handleScan =(data)=>{
    if(data) setResult(data)
    }

    const handleError =(e)=>{
console.log(e)
    }
  return (
    <div>
      <h1>Barcode and QRcode Scanner</h1>
      <QrReader onResult={handleScan}
        onError={handleError}
      className='scanner'/>
      <div>Result:<a href={result}>{JSON.stringify(result.text)}</a></div>
       
    </div>
  )
}

export default BarcodeScanner
