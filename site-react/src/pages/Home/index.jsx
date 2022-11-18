import { SectionBanner } from '../../components/SectionBanner';
import { SectionCards } from '../../components/SectionCards';
import { SectionSpecialists } from '../../components/SectionSpecialists';
import { SectionReasons } from '../../components/SectionReasons';
import { SectionValues } from '../../components/SectionValues';
import { ImovelContextProvider } from '../../context/ImovelContext';

export function HomePage() {
    return (
        <div id='homepage'>

            <div className="container">

                <ImovelContextProvider>
                    <SectionBanner />

                    <SectionCards />
                </ImovelContextProvider>


                <SectionReasons />

                <SectionSpecialists />

                <SectionValues />

            </div>

        </div>
    )
}