export default function Contact(){
    return(

    


<section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe
      width="100%"
      height="100%"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="map"
      scrolling="no"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3619.4173485889073!2d67.043153!3d24.883742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9ec0f1f6ff%3A0x85c7505fb994f897!2sAl-saba%20Recidency!5e0!3m2!1sen!2sus!4v1732805010265!5m2!1sen!2sus"/>
      
  </div>
  <div className="container px-5 py-24 mx-auto flex ">
    <div className="lg:w-1/3 md:w-1/2  bg-[#F1F8F1] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-myblack text-lg mb-1 font-medium title-font">
        Feedback
      </h2>
      <p className="leading-relaxed mb-5 text-mypink">
        Feel free to contact-us on:
      </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-mypink">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-mypink focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-mypink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-mypink focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-[#D32F2F] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        SEND
      </button>
      <p className="text-xs text-mypink mt-3">
        READY TO SERVE YOU ON YOUR DOORSTEP        
      </p>
    </div>
  </div>
</section>

    )
}


