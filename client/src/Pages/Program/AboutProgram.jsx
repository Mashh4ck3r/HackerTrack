import React from 'react'
import './Aboutpro.css'


function AboutProgram(data) {
  return (
    <div>
        <div className="about-progm-detail">
            <div dangerouslySetInnerHTML={{ __html: data.data }} />
        </div>
    </div>
  )
}

export default AboutProgram