import { render, screen, fireEvent } from '@testing-library/react';
import Stepper from "./stepper";

describe("Should render Stepper component", () => {

    beforeEach(() => {
        render(<Stepper />);
    })

    describe("when click BtnIncrease", () => {
        test("should increase 1 value", () => {
            //given
            const btn = screen.queryByRole("button", { name: "+" })
            const el = screen.queryByTestId('txtScore');
            const val = +el.textContent;
            const exp = val + 1;

            //when
            fireEvent.click(btn)
            const actual = +el.textContent;

            //then
            expect(actual).toEqual(exp);

        })
    })

    describe("when click BtnDecrease", () => {
        test("should decrease 1 value", () => {
           //given
           const btn = screen.queryByRole("button", { name: "-" })
           const el = screen.queryByTestId('txtScore');
           const val = +el.textContent;
           const exp = val - 1;

           //when
           fireEvent.click(btn)
           const actual = +el.textContent;

           //then
           expect(actual).toEqual(exp);
        })
    })

    describe("when current value changed", () => {
        test("should be able to display value", () => {
           //given
           const el = screen.queryByTestId('txtScore');
         

           //then
           expect(el).toBeInTheDocument();
        })
    })

})

// test btnIncrease
// test btnDecrease
// test currentvalue