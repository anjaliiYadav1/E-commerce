import React from 'react';
import "./Home.css";
import Product from './Product';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import ImageSlider from './ImageSlider';

/*
import image1 from "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg";
import image2 from  "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg";
import image3 from "https://img101.urbanic.com/b21b63c300a04ed49cda0f534b502aa3" ;

*/


function Home() {
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };

    const slides = [
        { url: "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" , title: 'Beach'},
        { url: "https://img101.urbanic.com/b21b63c300a04ed49cda0f534b502aa3" , title: 'Beach'},
        { url: "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" , title: 'Beach'},
        { url: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" , title: 'Beach'},
        { url: "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" , title: 'Beach'}
        

    ];

  
      
      
    return (
        <div className='home'>
           
            <div className='home__container'>
                              

                <img 
                    className='home__image'
                    src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
                    alt=""
                />

                <div className='home__row'>
                    <Product 
                        id = {1122345673}
                        title = 'Where the Crawdads Sing: SOON TO BE A MAJOR MOTION PICTURE—The #1 New York Times bestselling worldwide sensation with more than 12 million copies sold' 
                        price = {150}
                        rating ={5}
                        image = "https://images-na.ssl-images-amazon.com/images/I/41rzRPDRxJL._SX331_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id = {3452789476}
                        title = 'Furniture Cafe Wooden Floating Wall Mounted Shelves for Home Decor (4 Pieces, Brown)'
                        price = {1000}
                        rating = {4}
                        image = "https://m.media-amazon.com/images/I/61IAofyoy3L._AC_UL320_.jpg"
                    />
                    <Product
                        id = {2121674533}
                        title = 'Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)'
                        price = {3050}
                        rating = {5}
                        image = "https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UY218_.jpg"
                    />

                    <Product 
                        id = {2726345779}
                        title = 'Canon DSLR Camera [EOS 90D] with 18-135 is USM Lens | Built-in Wi-Fi, Bluetooth, DIGIC 8 Image Processor, 4K Video, Dual Pixel CMOS AF, and 3.0 Inch Vari-Angle Touch LCD Screen, Black' 
                        price = {3500}
                        rating ={3}
                        image = "https://m.media-amazon.com/images/I/61f9Hy-cujL._AC_UY218_.jpg"
                    />
                    {/* product */}
                    {/* product */}
                </div>

                <div className='home__row'>
                    <Product
                        id = {1115423221}
                        title = 'boAt Rockerz 450 Bluetooth Wireless On Ear Headphones with Mic and Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions and Dual Modes (Aqua Blue)'
                        price = {750}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/61u1VALn6JL._AC_UY218_.jpg"
                    />
                    <Product
                        id = {73333611124}
                        title = 'Kindle (10th Gen), 6" Display with Built-in Light, WiFi (Black)'
                        price = {1800}
                        rating = {4}
                        image = "https://m.media-amazon.com/images/I/61xtpHL4xyL._AC_UY218_.jpg"

                    />
                    {/* product */}
                    {/* product */}
                    {/* product */}
                </div>

                <div className='home__row'>
                    {/* product */}
                    <Product
                        title = 'Samsung 27 inches 1920 x 1080 Pixels Curved Bezel Less, Speakers, Fabric Textured Back Side, FHD, LED Monitor VA Panel with DP, HDMI, VGA, Audio in, Headphone Ports (Dark Blue Gray, LC27T550FDWXXL)'
                        price = {35000}
                        rating = {5}
                        image = "https://m.media-amazon.com/images/I/91+fneWO62L._AC_UY218_.jpg"
                    />
               
                </div>

                <div className='home__row'>
                    <Product 
                        id = {1239345673}
                        title = 'ASUS TUF Dash 15 (2022) Gaming Laptop, 15.6” 144Hz FHD Display, Intel Core i7-12650H, GeForce RTX 3060, 16GB DDR5, 512GB SSD, Thunderbolt 4, Thunderbolt 4, Windows 11 Home, Off Black, FX517ZM-AS73' 
                        price = {52000}
                        rating ={5}
                        image = "https://m.media-amazon.com/images/I/71AGOX9MORL._AC_SL1500_.jpg"
                    />
                    
                    <Product 
                        id = {1239345356}
                        title = 'Apple iPhone 12 Pro (128GB, Pacific Blue) [Locked] + Carrier Subscription' 
                        price = {77000}
                        rating ={4}
                        image = "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UL320_.jpg"
                    />

                </div>

                <div className='ad__image'>
                    <img 
                    
                        src=" https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg "
                        alt=""
                    />

                </div>

                <div className='home__row'>
                    <Product 
                        id = {3239995673}
                        title = 'Dove Deep Moisture Body Wash For Dry Skin Moisturizing Body Wash Transforms Even The Driest Skin In One Shower 22 oz 4 Count' 
                        price = {320}
                        rating ={5}
                        image = "https://m.media-amazon.com/images/I/51or9--aOvL._AC_UL320_.jpg"
                    />
                    
                    <Product 
                        id = {3239345356}
                        title = 'OGX Coffee Scrub and Wash, Coconut 19.5 Fl Oz' 
                        price = {220}
                        rating ={3}
                        image = "https://m.media-amazon.com/images/I/61V-ZvjGQEL._SX466_.jpg"
                    />

                </div>

                
               
               



                <div className='home__row'>
                    <Product 
                        id = {2589045673}
                        title = ' TBMPOY Womens Golf Polo T Shirts Lightweight Moisture Wicking Short Sleeve Shirt Quick Dry 4-Button '
                        price = {410}
                        rating ={3}
                        image = "https://m.media-amazon.com/images/I/61YBNz3JPSL._AC_UX466_.jpg"
                    />
                    
                    <Product 
                        id = {2233345356}
                        title = 'MIER Womens Golf Polo Shirts Collarless UPF  Short Sleeve Tennis Running T-Shirts VNeck' 
                        price = {870}
                        rating ={4}
                        image = "https://m.media-amazon.com/images/I/71Z3fvfRcDS._AC_UY550_.jpg"
                    />


                    <Product 
                        id = {1239075356}
                        title = 'Mens Performance T-Shirt Wrinkle-Resistant Quick Dry Short Sleeve Moisture Wicking UPF Sun Protection Athletic' 
                        price = {870}
                        rating ={4}
                        image = "https://m.media-amazon.com/images/I/71zfJHqAruL._AC_UL320_.jpg"
                    />
                </div>





                <div className='home__row'>
                    <Product 
                        id = {5239995673}
                        title = 'The Brighter the Light Paperback by Mary Ellen Taylor  (Author)'
                        price = {400}
                        rating ={5}
                        image = "https://images-na.ssl-images-amazon.com/images/I/41+y9dDSxjL._SX331_BO1,204,203,200_.jpg"
                    />
                    
                    <Product 
                        id = {5239345356}
                        title = 'The Last of the Moon Girls Paperback by Barbara Davis  (Author)'
                        price = {350}
                        rating ={4}
                        image = "https://images-na.ssl-images-amazon.com/images/I/51mBFpWgQGL._SX331_BO1,204,203,200_.jpg"
                    />

                    <Product 
                        id = {7239345356}
                        title = 'Nathan James Theo 6-Shelf Tall Bookcase, Wall Mount Bookshelf with Natural Wood Finish and Industrial Metal Frame, Rustic Oak/White'
                        price = {350}
                        rating ={5}
                        image = "https://m.media-amazon.com/images/I/81hU7z2aBxL._AC_SX679_.jpg"
                    />

                </div>
            
            </div>
            <div className='home__footer'>
                <h3>Registered Office Address</h3>
                    <p>Buildings Narnia,</p>
                    <p>Situated in the state of Haryana,</p>
                    <p>Side Street,</p>
                    <p>Haryana Village,</p>

                <div className='footer__one'>

                     
                    <div className='address__left'>
                       
                        <p>Near Seven park,</p>
                        <p>Saint Angeles  - 201103, India</p>
                    </div>
                    <div className='address__right'>
                        <p>CIN: U5362892K3673892j9</p>
                        <p>Telephone: +91-89-9999999</p>
                    </div>

                </div>
               
            </div>



        </div>
  )
}

export default Home