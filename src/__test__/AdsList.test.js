import { render, screen } from '@testing-library/react';
import AdsList from '../components/AdsList';
import { BrowserRouter  } from 'react-router-dom';
import Apt1 from '../assets/apt1.jpg';
import Tapes from '../assets/tapes.jpg';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
const MockedAdsList = (props) => {
    return (
        <BrowserRouter>
            <AdsList items={props.ads}/>
        </BrowserRouter>
    );
};

const ads = [
    {
        ads_key: getRandomIntInclusive(0,100),
        ads_img: Tapes,
        ads_price: 800,
        ads_description: "Student needs to live in accommodation Kitchener (32082).Student needs to live in accommodation Kitchener (32082)",     
    },
    {
        ads_key: getRandomIntInclusive(0,100),
        ads_img: Tapes,
        ads_price: 1800,
        ads_description: "2007 Porsche cayman",     
    },
    {
        ads_key: getRandomIntInclusive(0,100),
        ads_img: Tapes,
        ads_price: 2800,
        ads_description: "2010 Hyundai Genesis Coupe Certified.",     
    },
    {
        ads_key: getRandomIntInclusive(0,100),
        ads_img: Tapes,
        ads_price: 400,
        ads_description: "hardwood floors and open up the kitchen area.",     
    },
    {
        ads_key: getRandomIntInclusive(0,100),
        ads_img: Tapes,
        ads_price: 2400,
        ads_description: "Solid stone carved Male and Female Golfer sculpture . 9 inches. Please see my other posts for additional golf items and decor.",     
    },
    {
        ads_key: getRandomIntInclusive(0,100),
        ads_img: Tapes,
        ads_price: 200,
        ads_description: "Like new kettle.Want gone asap",     
    },
    {
        ads_key: getRandomIntInclusive(0,100),
        ads_img: Tapes,
        ads_price: "Please contact",
        ads_description: "Delicious meals.",     
    },
    {
        ads_key: getRandomIntInclusive(0,100),
        ads_img: Tapes,
        ads_price: 199,
        ads_description: "KITCHENER’S MATTRESS- QUEEN 2” PILLOW TOP MATTRESS FOR $199 ONLY",     
    },
    {
        ads_key: getRandomIntInclusive(0,100),
        ads_img: Tapes,
        ads_price: "Please contact",
        ads_description: "***Huge Ultraflex Mattress Clearance on all Mattress in a Box***",     
    },
    {
        ads_key: getRandomIntInclusive(0,100),
        ads_img: Tapes,
        ads_price: 175.93,
        ads_description: "Delicious meals.",     
    },
    {
        ads_key: getRandomIntInclusive(0,100),
        ads_img: Tapes,
        ads_price: "Please contact",
        ads_description: "Delicious meals.",     
    },
    {
        ads_key: getRandomIntInclusive(0,100),
        ads_img: Tapes,
        ads_price: "Please contact",
        ads_description: "Delicious meals.",     
    },
];

describe("Categories test suite", () => {
    test("Number of listings", () => {
        render(<MockedAdsList ads={ads} />);
        const itemsElement = screen.getAllByTestId('listing');
        expect(itemsElement.length).toBe(12);
    });

    test("Header visibility", () => {
        render(<MockedAdsList ads={ads} />);
        const itemElement = screen.getByText(/Top featured listing/i);
        expect(itemElement).toBeVisible;
    });
});