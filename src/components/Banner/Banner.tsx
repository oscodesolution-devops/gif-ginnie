import BannerImg from '../../assets/banner-gift-gnnie-website.jpg'


export default function Banner() {
    const phoneNumber = "918000932933";
    const message = "Hello! I'm interested in your services.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;
    return (
        <div className="w-full lg:h-[55vh] relative p-4">
        <div className='w-full h-full relative rounded-xl overflow-hidden'>
            <a href={whatsappLink} className='lg:w-full lg:h-full'>
                <img src={BannerImg} alt="GNNie's Gift Banner" className="w-full h-full lg:object-cover object-contain" />
            </a>
        </div>
        </div>
    );
}