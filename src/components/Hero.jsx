import { Link } from 'react-router-dom';
import rasm1 from "../imagesHome/hero1.webp"
import rasm2 from "../imagesHome/hero2.webp"
import rasm3 from "../imagesHome/hero3.webp"
import rasm4 from "../imagesHome/hero4.webp"
import rasm5 from "../imagesHome/rasm5.jpg"
import rasm6 from "../imagesHome/rasm6.jpg"
import rasm7 from "../imagesHome/rasm7.jpg"
import rasm8 from "../imagesHome/rasm8.jpg"

const carouselImages = [rasm1, rasm2, rasm3, rasm4, rasm5, rasm6, rasm7, rasm8];

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-primary'>
            Our Products
          </Link>
        </div>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box '>
        {carouselImages.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
