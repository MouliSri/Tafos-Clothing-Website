
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {Brands} from "./components/Brands";
import Poster from "./components/Poster"
import Horizontal from "./components/Horizontal";
import Animation from "./components/Animation";





export default function Home() {

  return (
    <div className=''>
       <Navbar />
       
       <Horizontal />
       <Poster /> 
       <Brands />
       <Animation />
     
       <Footer />
    </div>
  )
}
