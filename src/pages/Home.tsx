import Hero from "../components/Hero/Hero";
import Culture from "../components/cultures/Culture";
import Mission from "../components/ourmission/Mission";
import ClientsSlider from "../components/ourclinets/ClientsSlider";
import Experience from "../components/ourexperties/Experience";


export default function Home() {
  return (
    <>
      <Hero />
      <Culture/>
      <Mission/>
      <Experience/>
     <ClientsSlider/>
   
    </>
  );
}