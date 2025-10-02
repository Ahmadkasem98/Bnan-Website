import MainLayout from "../layouts/MainLayout";
import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import AboutBanan from "../sections/AboutBanan";
import TrendingTracks from "../sections/TrendingTracks";
import Trainers from "../sections/Trainers";
import NewTracks from "../sections/NewTracks";
import FAQ from "../sections/FAQ";
import Blog from "../sections/Blog";
import ContactUs from "../sections/ContactUs";


export default function Home() {
  return (
    <MainLayout>
      <div id="hero"><Hero /></div>
      <div id="services"><ServicesSection /></div>
      <div id="about"><AboutBanan /></div>
      <div id="trending"><TrendingTracks /></div>
      <div id="trainers"><Trainers /></div>
      <div id="new-tracks"><NewTracks /></div>
      <div id="faq"><FAQ /></div>
      <div id="blog"><Blog /></div>
      <div id="contact"><ContactUs /></div>
     
    </MainLayout>
  );
}
