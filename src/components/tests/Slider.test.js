import { render } from "@testing-library/react";
import Slider from "../Slider"

describe('Slider Component', () => {
    test('component renders', () => {
        const {container} = render(<Slider />);
        expect(container.querySelector('.slider')).toBeInTheDocument();
    })
})