import { render, screen, fireEvent, queryByText } from '@testing-library/react';
import Login from '../components/Login';

describe("Login test suites", () => {
    test("Login Header", () => {
        render(<Login />);
        const textElement = screen.getByText(/welcome to watmart/i);
        expect(textElement).toBeVisible;
    });

    test("Number of checkbox", () => {
        render(<Login />);
        const textElements = screen.getAllByRole("checkbox");
        expect(textElements.length).toBe(1);
    });

    test("checkbox visibility", () => {
        render(<Login />);
        const checkboxElement = screen.getByRole("checkbox");
        expect(checkboxElement).toBeVisible;
    });

    test("number of textfields ", () => {
        render(<Login />);
        const textfieldElements = screen.getAllByTestId(/textfield-0/i);
        expect(textfieldElements.length).toBe(2);
    });

});