import React from 'react'
import assets from '../assets/assets'

const About = () => {
    return (
        <div className='sm:px-[5vw] md:px-[7vw] lg:px-[9vw] px-4 bg-[#f1f5f6] pt-5 xl:pt-8 2xl:pt-10'>
            <h1 className='text-[#0f484e] text-2xl sm:text-3xl md:text-4xl lg:text-4xl  2xl:text-5xl font-bold drop-shadow-lg  mb-2 sm:mb-5 leading-tight'>From Heart to Hand: The Krishnas Promise...</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Text Section */}
                <div className="">
                    <h1 className="text-[#0f484e] text-xl md:text-2xl font-medium leading-relaxed">
                        Founded with a passion for timeless beauty, Krishnas Jewellers has been crafting exquisite diamond and gold jewellery for generations. What began as a small family venture has grown into a trusted name known for purity, craftsmanship, and innovation. Every creation reflects our deep respect for tradition and our drive to redefine elegance.
                    </h1>
                </div>

                {/* Image Section */}
                <div className=" flex justify-center">
                    <img
                        src={assets.about4}
                        alt="Krishnas Jewellers Collection"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Image Section */}
                <div className=" flex justify-center order-2 sm:order-1">
                    <img
                        src={assets.about1}
                        alt="Krishnas Jewellers Collection"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>

                {/* Text Section */}
                <div className="order-1 sm:order-2">
                    <h1 className="text-[#0f484e] text-xl md:text-2xl font-medium leading-relaxed">
                        At Krishnas Jewellers, each piece of jewellery is a masterpiece, handcrafted by skilled artisans who blend traditional techniques with modern artistry. From selecting the finest gemstones to polishing every detail, we ensure perfection and authenticity in every sparkle.
                    </h1>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Text Section */}
                <div className="">
                    <h1 className="text-[#0f484e] text-xl md:text-2xl font-medium leading-relaxed">
                        We believe trust is the most valuable jewel. All our gold and diamond pieces are hallmarked and certified for quality and authenticity. We follow transparent pricing and ethical sourcing, ensuring that your precious purchase carries not just beauty, but also integrity.
                    </h1>
                </div>

                {/* Image Section */}
                <div className=" flex justify-center">
                    <img
                        src={assets.about2}
                        alt="Krishnas Jewellers Collection"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Image Section */}
                <div className=" flex justify-center order-2 sm:order-1">
                    <img
                        src={assets.about3}
                        alt="Krishnas Jewellers Collection"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>
                {/* Text Section */}
                <div className="order-1 sm:order-2">
                    <h1 className="text-[#0f484e] text-xl md:text-2xl font-medium leading-relaxed">
                        Explore our wide range of collections — from bridal jewellery that captures tradition to contemporary diamond pieces designed for modern elegance. Whether it’s a celebration, a gift, or a daily wear treasure, you’ll find a perfect piece for every occasion.
                    </h1>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Text Section */}
                <div className="">
                    <h1 className="text-[#0f484e] text-xl md:text-2xl font-medium leading-relaxed">
                    Our vision is to continue crafting jewellery that tells stories of love, heritage, and individuality. We’re committed to innovation, sustainability, and customer satisfaction — ensuring that every piece you wear shines with pride and purpose.
                    </h1>
                </div>

                {/* Image Section */}
                <div className=" flex justify-center">
                    <img
                        src={assets.about5}
                        alt="Krishnas Jewellers Collection"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>
            </div>

        </div>
    )
}

export default About