import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Modal from "../Modal";

test('Rendering due to isOpen value', () => {
    const modal = render(<Modal isOpen={true}/>);
    expect(screen.getByRole('modal')).toHaveTextContent("add to cart");
});

test('calls onClick prop when clicked', ()=>{
    const handleClick = jest.fn()
    const modal = render(<Modal onClick={handleClick} text="onClick"/>);
    fireEvent.click(screen.getByText(/onClick/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
})

test('className is setting from props', ()=>{
    const modal = render(<Modal className="testButton" text="classTest"/>);
    expect(screen.getByText(/classTest/i).classList.contains("testButton")).toBe(true);
});