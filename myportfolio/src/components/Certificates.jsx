import React from 'react'
import certificates from './data/certificates.json'

const Certificates = () => {
  return (
    <>
    <div className="container certificate">
      <h1>CERTIFICATES</h1>
      {
        certificates.map((data)=>{
          return(
            <>
            <div key={data.id} className='cer-items text-center my-5 '
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
            
              <div className="cerdata">
                <h2>{data.role}</h2>
                <h5><span style={{color:'yellowgreen'}}>{data.organisation}</span></h5>
              </div>
            </div>
            </>
          )
        })
      }
    </div>
    </>
  )
}

export default Certificates