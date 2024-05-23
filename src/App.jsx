import { useState } from 'react'
import './App.css'
import Box from './Box'

function App() {
  const [count, setCount] = useState(0)
  let imgsrc = `https://i.ibb.co/qJWcghq/ashiq.jpg`;
  let imgname = `Md Shoriful Islam Ashiq`;
  let imgaddress = `Rajashon, Savar, Dhaka - 1340`;
  let imgage = 24;
  let imgphone = `+880 1744 444 444`;
  let imgemail = `ashiq@gmail.com`;
  let imglinkedin = `https://www.linkedin.com/in/mdsiaofficial/`;
  let imggithub = `https://github.com/mdsiaofficial`;
  let imgfacebook = `https://www.facebook.com/mdsiaofficial/`;
  let imgtwitter = `https://twitter.com/mdsiaofficial`;
  let imginstagram = `https://www.instagram.com/mdsiaofficial/`;
  let imgyoutube = `https://www.youtube.com/mdsiaofficial`;

  let imgInfo = [imgsrc, imgname, imgage, imgaddress, imgphone, imgemail, imggithub, imglinkedin, imgfacebook, imgtwitter, imginstagram, imgyoutube];

  let imginfo = {
    sorc: { imgsrc },
    Name: { imgname },
    Age: { imgage },
    Address: { imgaddress },
    Phone: { imgphone },
    Email: { imgemail },
    GitHub: { imggithub },
    LinkedIn: { imglinkedin },
    Facebook: { imgfacebook },
    Twitter: { imgtwitter },
    Instagram: { imginstagram },
    YouTube: { imgyoutube },
  }

  return (
    <>
      {/* value passed by props one by one */}
      <Box src={imgsrc} cardname={imgname} address={imgaddress} age={imgage} />
      {/* value passed by props by array */}
      {/* <Box src={imgInfo.imgsrc} cardname={imgInfo.imgname} address={imgInfo.imgaddress} age={imgInfo.imgage} /> */}

      <Box Info={imginfo}/>

    </>
  )
}

export default App
