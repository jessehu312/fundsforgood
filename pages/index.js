import Head from "next/head";
import Header from "@/components/home/Header";
import Impact from "@/components/home/Impact";
import Steps from "@/components/home/Steps";
import Banner from "@/components/home/Banner";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FundsForGood</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Impact />
      <Steps />
      <Banner />
      <Footer />
    </div>
  );
}
