import { FC } from 'react';
import Card, { CardVariant } from "./Card";
import EventsExamples from "./EventsExamples";

const HomePage: FC = () => {
    return (
        <>
            <Card 
            variant={CardVariant.primary} 
            width="200px" 
            height="200px"
            onClick={(num: number) => console.log('click', num)}
            >
                <button>Click</button>
            </Card>
            <EventsExamples/>
        </>
    )
}

export default HomePage;