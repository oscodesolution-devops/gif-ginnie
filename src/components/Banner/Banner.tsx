import BannerImg from '../../assets/banner-gift-gnnie-website.jpg'


export default function Banner() {
    return (
        <div className="w-full h-[50vh] relative p-4">
        <div className='w-full h-full relative rounded-xl overflow-hidden'>
            <img src={BannerImg} alt="GNNie's Gift Banner" className="w-full h-full object-fit" />
        </div>
        </div>
    );
}