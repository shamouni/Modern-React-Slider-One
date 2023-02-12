import { render, screen } from "@testing-library/react";
import Slide from "../Slide";

const mockData = {
    title: 'slide1', 
    text: 'hi-test', 
    src: 'hi-src', 
    lbl: 'sport', 
    color: 'blue', 
    cls: 'box'
}

describe('Slide Component', () => {
    
    test('component renders', () => {

        const { title, text, src, lbl, color, cls } = mockData;

        const { container } = render(<Slide {...mockData} />);
        
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText(lbl)).toBeInTheDocument();
        expect(container.querySelector('.' + color)).toBeInTheDocument();
        expect(container.querySelector('.' + cls)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(src));
    })
})