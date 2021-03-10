import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/lib/auth";
import Navbar from "@/components/home/Navbar";
import SocialSignIn from "./SocialSignIn";

const Header = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-hero-pattern h-screen-80'>
      <Navbar />
      <div className='container mx-auto px-4 xl:px-0'>
        <div className='flex flex-col md:flex-row justify-center items-center flex-wrap md:py-12 py-16'>
          <div className='max-w-xl md:w-1/2 pl-12'>
            <div className='py-8'>
              <div className='text-white font-bold text-5xl pb-4'>
                <h1 className='mb-2'>Align your investments</h1>
                <h1>with your values</h1>
              </div>
              <p className='text-left text-white text-md leading-6'>
                Invest in companies that align with the causes you care most
                about, without sacrificing your performance goals.
              </p>
            </div>
            <button
              onClick={() => {
                if (user) {
                  return router.push("/dashboard");
                }
                setOpen(true);
                console.log("activated");
              }}
              className='text-white bg-primary px-16 py-3 rounded-lg shadow-sm text-lg'>
              Start Now
            </button>
          </div>
          <div className='relative md:w-1/2' />
          <img
            className='hidden md:block md:absolute top-0 right-1/4 w-72'
            src='/images/treebulb.png'
            alt='Treebulb'
          />
        </div>
      </div>
      {open && <SocialSignIn setOpen={setOpen} />}
    </div>
  );
};

export default Header;
