import { test, expect } from "vitest"
//import { fireEvent, screen, render } from '@testing-library/react'
import { create } from "react-test-renderer"
import "@testing-library/jest-dom"
import LabelInputComponent from '../LabelInputComponent';
import { ChangeEvent } from "react";

test('Snapshat of CompHexToAscii', () => {
    const tree = create(<LabelInputComponent value={undefined} nameValue={""} 
        converterTarget={function (_event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
    } } children={""} />)
    expect(tree.toJSON()).toMatchSnapshot()
});

/*
describe("testing children FirstComp", () => {
    test('testing function handleReverse', () => {
        const beverage = "tested";
        const convertResult = vi.fn(beverage => beverage)
        convertResult(beverage)
        render(
            <LabelInputComponent value={undefined} nameValue={""}>
                <button data-testid="testid-btn">
                    Convert
                </button>
            </LabelInputComponent>
        )
        fireEvent.click(screen.getByTestId('testid-btn'))
        //expect(convertResult).toHaveReturnedWith("tested")
        expect(convertResult).toHaveBeenCalledTimes(1)
        expect(convertResult).toBeDefined();
    })
});
*/