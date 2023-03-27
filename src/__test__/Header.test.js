import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter  } from 'react-router-dom';

const MockedHeader = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
};

describe("Header in main page test suites", () => {
    test("Register button visible", () => {
        render(<MockedHeader />);
        const registerElement = screen.getByText(/register/i);
        expect(registerElement).toBeInTheDocument;
    });

    test("Register button visible", () => {
        render(<MockedHeader />);
        const signinElement = screen.getByText(/sign-in/i);
        expect(signinElement).toBeInTheDocument;
    });
    test("Post ad button visible", () => {
        render(<MockedHeader />);
        const signinElement = screen.getByText(/post ad/i);
        expect(signinElement).toBeInTheDocument;
    });
});