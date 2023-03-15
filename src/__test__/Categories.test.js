import { render, screen, fireEvent } from '@testing-library/react';
import Categories from '../components/Categories';
import { BrowserRouter  } from 'react-router-dom';
import Apt1 from '../assets/apt1.jpg';

const MockedCategories = (props) => {
    return (
        <BrowserRouter>
            <Categories categories={props.categories}/>
        </BrowserRouter>
    );
};

const categories = [
    {
        catgory_id: 1,
        category_name: "Electronics",
        category_img: Apt1
    },
    {
        catgory_id: 2,
        category_name: "Furniture",
        category_img: Apt1
    },
    {
        catgory_id: 3,
        category_name: "Clothing",
        category_img: Apt1
    },
    {
        catgory_id: 4,
        category_name: "Books",
        category_img: Apt1
    },
    {
        catgory_id: 5,
        category_name: "Sports",
        category_img: Apt1
    },
    {
        catgory_id: 6,
        category_name: "Collectibles",
        category_img: Apt1
    },
    {
        catgory_id: 7,
        category_name: "Music instruments",
        category_img: Apt1
    },
    {
        catgory_id: 8,
        category_name: "Accessories",
        category_img: Apt1
    },
    {
        catgory_id: 9,
        category_name: "Home appliances",
        category_img: Apt1
    }
];

describe("Categories test suite", () => {
    test("Number of categories", () => {
        render(<MockedCategories categories={categories} />);
        const itemsElement = screen.getAllByTestId('item');
        expect(itemsElement.length).toBe(9);
    });

    test("Category visibility", () => {
        render(<MockedCategories categories={categories} />);
        const itemElement = screen.getByText('Electronics');
        expect(itemElement).toBeVisible;
    });

    test("Header visibility", () => {
        render(<MockedCategories categories={categories} />);
        const itemElement = screen.getByText(/featured categories/i);
        expect(itemElement).toBeVisible;
    });
});