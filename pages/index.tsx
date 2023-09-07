import Layout from '@/components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            <div className="h-full flex items-center">
              <div className="h-60 w-10 bg-orange-400"></div>
              <div className="bg-black h-full w-full"></div>
            </div>
          </div>
          <div className="col-span-7 pl-6">
            <div className="inline-block">
              <hr className="mb-3 border-orange-300" style={{ width: '70%' }}></hr>
              <h6 className="text-md text-slate-600 mb-2">GET IN TOUCH</h6>
            </div>
            <div className="flex mb-8">
              <h1 className="text-5xl font-bold">Get a Free</h1>
              <h1 className="text-5xl text-orange-400 font-bold">&nbsp;Quote</h1>
            </div>
            <div className="grid grid-cols-2 mb-4 gap-4">
              <div className="col-span-1">
                <input className="border border-orange-100 py-3 px-5 w-full" type="text" placeholder="Full Name" />
              </div>
              <div className="col-span-1">
                <input className="border border-orange-100 py-3 px-5 w-full" type="text" placeholder="Your Email" />
              </div>
            </div>
            <div className="grid grid-cols-2 mb-4 gap-4">
              <div className="col-span-1">
                <input className="border border-orange-100 py-3 px-5 w-full" type="text" placeholder="Phone" />
              </div>
              <div className="col-span-1">
                <input className="border border-orange-100 py-3 px-5 w-full" type="text" placeholder="Website" />
              </div>
            </div>
            <div className="grid mb-4">
              <div className="col-span-1">
                <textarea className="border border-orange-100 py-3 px-5 w-full" rows={3} placeholder="Your Message"></textarea>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <button className="bg-orange-400 py-3 px-7 text-white">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
