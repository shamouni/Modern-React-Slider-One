import { render } from "@testing-library/react";
import Slides from "../Slides";

describe('Slides Component', () => {
    
    test('component renders', () => {

        const { container } = render(<Slides />);
        
        expect(container.querySelector('#slides')).toBeInTheDocument();
        expect(container.querySelector('#prev-slide')).toBeInTheDocument();
        expect(container.querySelector('#next-slide')).toBeInTheDocument();
    })
})