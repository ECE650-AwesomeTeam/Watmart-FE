import { render, screen, fireEvent } from '@testing-library/react';
import AnimatingBanner from '../components/AnimatingBanner';
import { BrowserRouter  } from 'react-router-dom';

// const MockedHeader = () => {
//     return (
//         <BrowserRouter>
//             <Header />
//         </BrowserRouter>
//     );
// };

describe("Animating banner", () => {
    test("Text visible", () => {
        render(<AnimatingBanner />);
        const text1Element = screen.getByText(/welcome to/i);
        expect(text1Element).toBeInTheDocument;
    });
    test("small text visible", () => {
        render(<AnimatingBanner />);
        const text1Element = screen.getByText(/Reduce, reuse, Recycle with a click./i);
        expect(text1Element).toBeInTheDocument;
    });
});