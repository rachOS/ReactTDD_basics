import {render, screen} from "@testing-library/react";
import App from "app/app";

it('should run app', () => {
    render(<App/>)
    const link = screen.getByRole('link', {
    name : "Visit on Github"
})
    expect(link).toBeInTheDocument()
});