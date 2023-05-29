
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {Brands} from "./components/Brands";

import Horizontal from "./components/Horizontal";
import Animation from "./components/Animation";


export default function Home() {

  return (
    <div className=''>
       <Navbar />
  
 
       
       <Horizontal />
       <Brands />
       <Animation />
     
       <Footer />
    </div>
  )
}
