import {useEffect, useState} from 'react';
import axios from 'axios'
export default function a(){
    const [cnt, setCnt] =   useState()

useEffect(() => {
    axios.get('https://www.naver.com')
  .then(function (response) {
    // handle success
    console.log(resopnse.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    // alert('somehthing went wrong');
    // setError(error.toSring())
  })  
  })


}