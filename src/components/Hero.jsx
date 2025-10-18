import heroImg from "../assets/hero.jpeg"
import "./Hero.css"
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
   <>
        <div className="img-container">
            <img src={heroImg} alt="Hero.jpeg" />
             <h1>Launch Your Tech Carrer <br /> with us !</h1>
             <p>Get hands-on training and a direct pathway to a Carrer at <br /> Terralogic Academy</p>
             <button className="hero-btn">Get Started <ArrowRight/></button>      
        </div>
   </>
  )
}

export default Hero