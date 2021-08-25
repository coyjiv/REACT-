import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Modal from "../Modal";

test('Rendering due to isOpen value', () => {
    const modal = render(<Modal isOpen={true} text="isOpen"/>);
    expect(screen.getByText(/isOpen/i)).toHaveTextContent("isOpen");
});

test('calls onCancel prop when clicked on cross', ()=>{
    const handleClick = jest.fn()
    const modal = render(<Modal isOpen={true} onCancel={handleClick} closeButton={true} text="modal onCancel"/>);
    const cross = screen.getByAltText(/cross/i);
    fireEvent.click(cross)
    expect(handleClick).toHaveBeenCalledTimes(1)
})

test('text prop is setting text', ()=>{
    const modal = render(<Modal isOpen={true} text="modaltext"/>);
    expect(screen.getByText(/modaltext/i)).toHaveTextContent("modaltext");
});

test('header prop is setting text', ()=>{
    const modal = render(<Modal isOpen={true} header="modaltextheader"/>);
    expect(screen.getByText(/modaltextheader/i)).toHaveTextContent("modaltextheader");
});

test('prop actions receiving child nodes', ()=>{
    const modal = render(<Modal isOpen={true} actions={<h1 data-testid="actionstest">actions</h1>}/>);
    expect(screen.getByTestId(/actionstest/i)).toHaveTextContent("actions");
});