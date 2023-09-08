import AboutImg from '../../public/img/about.png';

export default function About() {
  return (
    <div className="max-w-6xl w-full py-24 grid grid-cols-12 gap-10">
      <div className="col-span-6 pr-5">
        <div className="h-full flex items-center">
          <div className="h-full w-full relative" style={{ backgroundImage: `url(${AboutImg.src})`, backgroundSize: 'cover', }}>
            <div className="bg-orange-400 absolute bottom-0 left-0 w-30 h-30 py-5 flex flex-col items-center text-white">
              <h1 className="text-5xl font-extrabold">10+</h1>
              <div className="text-md mx-7 flex flex-col items-center">
                <h6 className="">Years Of</h6>
                <h6 className="">Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 py-12">
        <div className="inline-block">
          <hr className="mb-3 border-orange-300" style={{ width: '40%' }}></hr>
          <h6 className="text-md text-slate-600 mb-5">OUR INTRODUCTION</h6>
        </div>
        <div className="flex mb-5">
          <h1 className="text-5xl font-extrabold">About Our</h1>
          <h1 className="text-5xl text-orange-400 font-bold">&nbsp;Factory</h1>
        </div>
        <h6 className="text-md mb-5">Let&apos;s Experience The Power Of The Sun. To ensure our World&apos;s future children little girls. Act now tackling sun, wind and waters!</h6>
        <div className="mb-5">
          <ul className="list-inside">
            <li className="font-semibold text-md mb-3">
              <span className="mr-2 inline-block w-2 h-2 bg-orange-400"></span>
              Future is efficient power vitality and sustainable power source
            </li>
            <li className="font-semibold text-md mb-3">
              <span className="mr-2 inline-block w-2 h-2 bg-orange-400"></span>
              Green Clean Renewable Energy
            </li>
            <li className="font-semibold text-md mb-3">
              <span className="mr-2 inline-block w-2 h-2 bg-orange-400"></span>
              Harvest the breeze, water, and sun for your vitality needs
            </li>
            <li className="font-semibold text-md mb-5">
              <span className="mr-2 inline-block w-2 h-2 bg-orange-400"></span>
              Energy Is As Perfect As The Breeze
            </li>
          </ul>
        </div>
        <button className="bg-orange-400 py-3 px-8 text-white text-md">Read More</button>
      </div>
    </div>
  )
}
