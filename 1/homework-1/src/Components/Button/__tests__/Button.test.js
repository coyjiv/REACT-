import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Button from "../Button";

test('Props "text" is giving textContent to component', () => {
    const button = render(<Button text="add to cart"/>);
    expect(screen.getByRole('button')).toHaveTextContent("add to cart");
});

test('calls onClick prop when clicked', ()=>{
    const handleClick = jest.fn()
    const button = render(<Button onClick={handleClick} text="onClick"/>);
    fireEvent.click(screen.getByText(/onClick/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
})

test('className is setting from props', ()=>{
    const button = render(<Button className="testButton" text="classTest"/>);
    expect(screen.getByText(/classTest/i).classList.contains("testButton")).toBe(true);
});