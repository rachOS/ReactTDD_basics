import {fireEvent, render, screen} from "@testing-library/react";
import Button from "components/atoms/button";

describe('ToggleColorButton', () => {
    it('should have a default color to red', () => {
        render(<Button/>)

        const button = screen.getByRole('button', {name: "click to render blue"})

        expect(button).toBeInTheDocument()
    });
    it('should have a red background', () => {
        render(<Button/>)

        const button = screen.getByRole("button", {name: "click to render blue"})

        expect(button).toHaveClass('btn-bg-red')
    });

    describe('tooggle color', () => {

        it('should toggle to a blue background when clicked', () => {
            render(<Button/>)

            const button = screen.getByRole("button", {name: "click to render blue"})

            fireEvent.click(button)

            expect(button).toHaveClass('btn-bg-blue')
            expect(button).toHaveTextContent("click to render red")
        });

        it('should toggle from  blue to red background and vice versa when clicked multiple times', () => {
            render(<Button/>)

            const button = screen.getByRole("button", {name: "click to render blue"})

            fireEvent.click(button)

            expect(button).toHaveClass('btn-bg-blue')
            expect(button).toHaveTextContent("click to render red")

            fireEvent.click(button)

            expect(button).toHaveClass('btn-bg-red')
            expect(button).toHaveTextContent("click to render blue")

            fireEvent.click(button)

            expect(button).toHaveClass('btn-bg-blue')
            expect(button).toHaveTextContent("click to render red")
        });
    });

});