import Image from "next/image";
import StayConnected from "@/components/StayConnected";
import Cover from "@/assets/cover-min.png";
import DirectMinistriesLogo from "@/assets/logo.svg";
import DirectMinistriesLogoBox from "@/assets/logo_box.svg";
import Ministry from "@/components/Ministry";

export default function Home() {
  return (
    <div className='w-full bg-white text-black'>
      <div
        className='relative flex items-center justify-center h-screen bg-cover'
        style={{
          backgroundImage: `url('${Cover.src}')`,
        }}>
        <Image
          src={DirectMinistriesLogo}
          alt='Direct Ministries Logo'
          className='absolute w-40 h-40'
        />
      </div>
      <StayConnected />
      {/* The Five Fold Ministries */}
      <div
        id='five-fold-ministry'
        className='bg-white text-black flex flex-col justify-center min-h-screen items-center p-4'>
        <div className='flex flex-col items-center mt-16'>
          <span className='text-3xl font-bold'>Ministries</span>
          <span className='mt-4 text-center'>The Five Fold Ministries</span>
        </div>
        <div className='flex gap-8 mt-16 flex-wrap justify-center'>
          <Ministry
            header='GO'
            title='Apostle'
            description="They are the Church Planter's in the Body of Christ. They carve out
          new works, in new areas for the furtherence of The Gospel Message."
          />
          <Ministry
            header='GUIDE'
            title='Prophets'
            description="They are the Spokesman and Mouthpiece of the will of God for the Body of Christ. They speak on God's behalf to the Church to bring them into alignment to his will."
          />
          <Ministry
            header='GATHER'
            title='Evangelist'
            description='They are the Soul Winners to the body of Christ. They are sent everywhere The LORD leads to herald the Gospel message of Salvation to the lost.'
          />
          <Ministry
            header='GROW'
            title='Pastors'
            description="They are the Shepherding Ministry to the Body of Christ. They care for, and nurture the pasture of God's flock so that the people can develop into their ministries for the will of God."
          />
          <Ministry
            header='GROUND'
            title='Teachers'
            description='The teacher is the Educational Ministry for the Body of Christ. They teach people the deep understanding of the word of God for their Spiritual development in Christ.'
          />
        </div>
      </div>
      {/* About Us */}
      <div
        id='about-us'
        className='flex flex-col items-center justify-center min-h-screen p-4 mt-32 border-t'>
        <span className='text-3xl font-bold mt-32'>About Us</span>
        <div className='flex gap-16 mt-16 flex-wrap justify-center items-center px-4'>
          <Image
            src={DirectMinistriesLogoBox}
            alt='Direct Ministries Logo Box'
            className='w-64 h-64'
          />
          <div className='flex flex-col'>
            <p className='max-w-[90ch] text-xl leading-10'>
              We are a group of Apostolics who believe in equipping the next
              generation with the 9 Gifts of The Spirit, and also the Biblical
              understanding of the Five Fold Ministry. We understand that in
              these times, our knowledge of these things are vital for the
              furtherance of the ministry and the preaching of the Gospel. We
              take you through step by step on how each of them operate, and we
              even have a time of demonstration in real time so that you can
              learn to get comfortable with the movements of The Spirit.
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div
        id='contact-us'
        className='flex w-full flex-col items-center min-h-screen justify-center py-16 px-2 sm:p-4 mt-32 border-t'>
        <span className='text-center mt-32'>
          CAN’T FIND WHAT YOU’RE LOOKING FOR?
        </span>
        <span className='text-3xl font-bold mt-4 text-center'>CONTACT US</span>
        <div className='flex w-full p-8 flex-wrap gap-16 mt-16'>
          <div className='flex flex-col flex-1 basis-80 border-r'>
            <span className='text-2xl font-bold mb-4'>Location</span>
            <iframe
              className='w-full'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7670.00593431277!2d120.32517683654976!3d16.01336104255033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33915d31cb3666cb%3A0xe70810f56833a2a!2sBanaoang%2C%20Calasiao%2C%20Pangasinan!5e0!3m2!1sen!2sph!4v1710070008167!5m2!1sen!2sph'
              width='600'
              height='450'
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'></iframe>
            <span className='mt-4'>
              Lot #25 Banaoang Calasiao Pangasinan 2418
            </span>
          </div>
          <div className='flex flex-col flex-1 basis-20'>
            <span className='text-2xl font-bold mb-4'>Contact Numbers</span>
            <span className='font-bold'>Mobile Numbers</span>
            <span>09123456789</span>
            <span>09123456789</span>
            <span className='font-bold mt-8'>Landlines</span>
            <span>(123) 456-789</span>
            <span>(123) 456-789</span>
            {/* <input
              className='p-2 mt-2 border rounded w-full'
              type='text'
              placeholder='Name'
            />
            <input
              className='p-2 mt-2 border rounded w-full'
              type='text'
              placeholder='Email'
            />
            <textarea
              className='p-2 mt-2 border rounded min-h-64 resize-none w-full'
              placeholder='Your message...'
            /> 
            <button className='bg-black text-white p-2 mt-2 rounded'>
              Submit
            </button>
          */}
          </div>
        </div>
      </div>
    </div>
  );
}
