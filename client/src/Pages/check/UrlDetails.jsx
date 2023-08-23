import React from 'react'
import axios from 'axios';


function UrlDetails({id}) {

    

    const options = {
      method: 'GET',
      url: `https://www.virustotal.com/api/v3/analyses/${id}`,
      headers: {
        accept: 'application/json',
        'x-apikey': '0c39a674b5111a143b49158ec7106234bb622f3b2c696c2e448ce46911a71e01'
      }
    };
    
   if(id){
    axios
    .request(options)
    .then(function (response) {
      if(id){
      console.log(response.data);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
   }
    
  return (

    <div>
        <div className="details text-xl text-white">
            details:{ id }
        </div>
    </div>
  )
}


export default UrlDetails