import Navbar from '../../components/NavbarSigned'
import HeroSection from '../../components/HeroSectionSigned'
import MostRelevantSection from '../../components/MostRelevantSection'
import NewPlacesSection from "../../components/NewPlacesSection";
import WhyChooseEgyBook from "../../components/WhyChooseSection";
import TrendingDestinations from "../../components/TrendingDestinationsSections";
import CTAsections from "../../components/CTAsections";
import FooterSection from "../../components/FooterSection";
import MainLayout from '../../components/MainLayout'
    

export default function Home() {
  return (
    <>
    <MainLayout navbar={<Navbar />}> 
    <HeroSection />
      <MostRelevantSection />
      <NewPlacesSection />
      <WhyChooseEgyBook />
      <TrendingDestinations />
      <CTAsections />
      <FooterSection />
    </MainLayout>
      
    </>
  );
}
