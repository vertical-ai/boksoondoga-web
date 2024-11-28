import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Add metadata export
export const metadata: Metadata = {
  title: 'Boksoondoga - Traditional Korean Makgeolli | Hand-brewed Rice Wine',
  description: 'Discover Boksoondoga\'s premium hand-brewed Makgeolli. Experience traditional Korean rice wine, subscription services, and brewing workshops. Pure, non-pasteurized excellence.',
  keywords: 'Boksoondoga, Makgeolli, Korean rice wine, traditional brewing, hand-brewed, subscription service',
  openGraph: {
    title: 'Boksoondoga - Traditional Korean Makgeolli',
    description: 'Premium hand-brewed Makgeolli and traditional Korean rice wine',
    images: ['/images/main2.jpg'],
  },
};
export default function Home() {
  return (
    <div className={'h-full flex flex-col touch-none transition duration-700 transform'}>
      <div className="h-[1270px] relative">
        <div className="flex h-[1270px]">
          <video id="mainMP4" autoPlay muted loop
                 className={'absolute top-50 left-50 w-auto h-full object-cover min-w-[100vw] min-h-[100vh] z-[-1000] overflow-hidden'}>
            <source
              src="https://player.vimeo.com/progressive_redirect/playback/512784548/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=2afb339fb8023d7672e3b86ee5be908f9303eec4cc1176a817b6e1eecacb89aa"
              type="video/mp4"/>
          </video>
          <div
            className="absolute text-center z-4 left-1/2 top-1/2 text-white -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
            <strong className={'text-4xl'}>A beautiful white object<br/>that makes people sing,<br/>Boksoondoga Makgeolli</strong>
            <p className={'block text-3xl text-black font-bold opacity-50'}>Pure.<br/>Non-pasteurized.<br/>Hand-brewed.</p>
            <Link href="/"
                  className={'inline-block mx-auto text-base text-white font-bold border border-white py-4 px-5 font-roboto-condensed'}>about</Link>
          </div>
        </div>
      </div>
      <div className="h-[1270px] relative">
        <div className="flex h-[1270px]">
          <Image
            src={'/images/main2.jpg'}
            width={1920}
            height={1080}
            className={'absolute top-50 left-50 w-auto h-full object-cover min-w-[100vw] min-h-[100vh] z-[-1000] overflow-hidden'}
            alt={'Boksoondoga subscription service'}/>
          <div
            className="absolute text-center z-4 left-1/2 top-1/2 text-white -translate-x-1/2 flex flex-col gap-4">
            <strong className={'text-4xl'}>From our brewery to your doorstep<br/>Boksoondoga traditional alcohol,<br/>Easy to order with one click!</strong>
            <p className={'block text-3xl text-black font-bold opacity-50'}>Fresh Hand-brewed.<br/>Ongoing Subscription.<br/><br/>(Subscription service coming soon)</p>
            <Link href="/"
                  className={'inline-block mx-auto text-base text-white font-bold border border-white py-4 px-5 font-roboto-condensed'}>Subscription</Link>
          </div>
        </div>
      </div>
      <div className="h-[1270px] relative">
        <div className="flex h-[1270px]">
          <Image
            src={'/images/main3.jpg'}
            width={1920}
            height={1080}
            className={'absolute top-50 left-50 w-auto h-full object-cover min-w-[100vw] min-h-[100vh] z-[-1000] overflow-hidden'}
            alt={'Boksoondoga traditional brewing'}/>
          <div
            className="absolute text-center z-4 left-1/2 top-1/2 text-white -translate-x-1/2 flex flex-col gap-4">
            <strong className={'text-4xl'}>A feast for the living, breathing yeast.<br/>Boksoondoga Rice Wine sticks to<br/>the traditional brewing methods.</strong>
            <p className={'block text-3xl text-black font-bold opacity-50'}>
              Crafting excellence through patience and dedication.<br/>Discover our diverse products<br/>with easy online ordering!
            </p>
            <Link href="/"
                  className={'inline-block mx-auto text-base text-white font-bold border border-white py-4 px-5 font-roboto-condensed'}>Store</Link>
          </div>
        </div>
      </div>
      <div className="h-[1270px] relative">
        <div className="flex h-[1270px]">
          <Image
            src={'/images/main4.jpg'}
            width={1920}
            height={1080}
            className={'absolute top-50 left-50 w-auto h-full object-cover min-w-[100vw] min-h-[100vh] z-[-1000] overflow-hidden'}
            alt={'Boksoondoga brewing experience'}/>
          <div
            className="absolute text-center z-4 left-1/2 top-1/2 text-white -translate-x-1/2 flex flex-col gap-4">
            <strong className={'text-4xl'}>Experience the taste<br/>of hand-crafted Makgeolli.</strong>
            <p className={'block text-3xl text-black font-bold opacity-50'}>A unique experience of brewing and tasting!<br/>Join Boksoondoga&apos;s<br/>Fermentation Makgeolli Workshop</p>
            <Link href="/"
                  className={'inline-block mx-auto text-base text-white font-bold border border-white py-4 px-5 font-roboto-condensed'}>Experience</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
