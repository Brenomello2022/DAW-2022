import { SectionDesc } from '../../components/SectionDesc';
import { SectionCards } from '../../components/SectionCards';
import { SectionInfo } from '../../components/SectionInfo';

export function HomePage() {
    return (
        <div id='homepage'>

            <div className="container">

                <SectionDesc />

                <SectionCards />

                <SectionInfo />

            </div>

        </div>
    )
}
