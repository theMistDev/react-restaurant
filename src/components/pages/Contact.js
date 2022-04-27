import React from 'react';
import PageTitle from '../PageTitle';
import Button from '../Button';


const Contact = () => {
  return (
    <main>
      <PageTitle title="Contact Us" />
      <div className="md:grid grid-cols-2">
        <div className="col-span-1 flex flex-col justify-center pl-5">
          <div className="text-xl">
            <h4 className="text-2xl">You can visit our Restaurant at:</h4>
            <p className="pt-4">The Presidency Kitchen, </p>
            <p>Aso Rock Villa, </p>
            <p>Aso Rock, </p>
            <p>Abuja, Nigeria</p>
          </div>

          <div className="py-5">
            <div className="flex flex-row items-center">
              <label>Phone Number:</label>
              <p className="pl-3">+2347033244444</p>
            </div>

            <div className="flex flex-row items-center ">
              <label>Email:</label>
              <p className="pl-3">mail@coolbitefoods.com</p>
            </div>
          </div>
        </div>

        <div>
          <form className="w-full px-3 py-3">
            <h4 className="font-bold text-2xl pb-3">Contact Us Form</h4>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className="border-2 border-slate-400 w-full py-2 pl-2 placeholder-slate-500 rounded-lg"
            />

            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="mt-2 border-2 border-slate-400 w-full py-2 pl-2 placeholder-slate-500 rounded-lg"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Enter Your Phone"
              className="mt-2 border-2 border-slate-400 w-full py-2 pl-2 placeholder-slate-500 rounded-lg"
            />

            <textarea
              name="message"
              type="text"
              placeholder="Enter Message Here"
              className="mt-2 border-2 border-slate-400 w-full py-2 pl-2 placeholder-slate-500 rounded-lg"
            rows='5'
            />

            <Button title="Send Message" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
