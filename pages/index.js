import HeroSection from "../components/HeroSection"
import Mediocrity from "../components/Mediocrity"
import SavingTheWorld from "../components/SavingTheWorld"
import Consultation from "../components/Consultation"
import MicroManagement from "../components/MicroManagement"

export default function Home() {
    return (
        <div className="">
            <HeroSection />
            <MicroManagement />
            <Mediocrity />
            <SavingTheWorld />
            <Consultation />
        </div>
    )
}
