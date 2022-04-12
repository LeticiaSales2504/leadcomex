import Image from 'next/image'

const Logo = () => 
  <div className="flex justify-center px-3 py-2 bg-slate">
    <Image src="/logo.png" width={250} height={40} alt="logo" className="w-16 md:w-32 lg:w-48" />
  </div>

export default Logo