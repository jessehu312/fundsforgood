import { useState, useEffect } from "react";
import ImpactCardPreference from "@/components/ImpactCardPreference";
import SidePanel from "@/components/SidePanel";
import { useAuth } from "@/lib/auth";
import { fetchUserData, updateImpactPreference } from "@/lib/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/dashboard/Navbar";

const LoadingDashboard = () => (
  <div className='h-screen'>
    <svg
      className='animate-spin h-8 w-8 m-4 text-green-500'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'>
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
    </svg>
  </div>
);

const Dashboard = () => {
  const [selectedImpact, setSelectedImpact] = useState("");
  const auth = useAuth();

  const impactData = [
    {
      name: "Broad",
      desc:
        "This option will help you reach your goals while investing in ETFs that meet Environmental, Social, and Governance (ESG) requirements.",
      img: "city.png",
    },
    {
      name: "Climate",
      desc:
        "Environment Funds  looks at the climate impact of the most popular mutual funds.",
      img: "climate.png",
    },
    {
      name: "Social",
      desc:
        "Social funds look at the social impact of the most popular mutual funds.",
      img: "social.png",
    },
    {
      name: "Racial Justice",
      desc:
        "Racial Justice Funds indicators informs our corporate engagements to hold corporations accountable for implementing policies and practices aligned on racial justice.",
      img: "racial-justice.png",
    },
    {
      name: "Workplace Equity",
      desc:
        "Workplace Equity fund engage companies to increase gender and ethnic diversity throughout their organization.",
      img: "workplace-equity.png",
    },
    {
      name: "Gender Equality",
      desc:
        "Gender Equality Funds screens funds using company performance on 12 key gender equality indicators.",
      img: "gender-equality.png",
    },
  ];

  const handleSelect = (e) => {
    let element = e.target;
    while (!element.getAttribute("data-name") && element.parentElement) {
      element = element.parentElement;
    }

    const oldImpact = selectedImpact;
    const newImpact = element.getAttribute("data-name") ?? selectedImpact;
    setSelectedImpact(newImpact);

    if (oldImpact !== newImpact) {
      updateImpactPreference(auth?.user?.uid, newImpact);
      notify();
    }
  };

  useEffect(() => {
    const fetchPreferences = async () => {
      const data = await fetchUserData(auth?.user?.uid);
      setSelectedImpact(data?.impact);
    };

    fetchPreferences();
  }, []);

  const notify = () => toast.success("Preference Successfully Updated!");

  return (
    <div className='bg-black w-full'>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='flex flex-row relative flex-no-wrap'>
        <SidePanel index={2} auth={auth} hScreen />
        {!auth.user ? (
          <LoadingDashboard />
        ) : (
          <div className='flex-1 overflow-x-scroll py-12 dark:bg-gray-900'>
            <Navbar />
            <div className='max-w-screen-xl mx-auto px-4 pt-24'>
              <h1 className='text-primary text-left text-3xl font-semibold mb-12'>
                Preferences
              </h1>
              <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-16 lg:gap-x-36'>
                {impactData.map((el, idx) => (
                  <ImpactCardPreference
                    key={idx}
                    name={el?.name}
                    desc={el?.desc}
                    img={el?.img}
                    selected={
                      selectedImpact === el?.name.split(" ")[0].toLowerCase()
                    }
                    setSelectedImpact={handleSelect}
                    savable
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
