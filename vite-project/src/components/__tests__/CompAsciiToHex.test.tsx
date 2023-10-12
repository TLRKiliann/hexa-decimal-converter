import { ChangeEvent } from "react";
import { test, expect, describe } from "vitest"
import { fireEvent, screen, render } from '@testing-library/react'
import { create } from "react-test-renderer"
import "@testing-library/jest-dom"
import CompAsciiToHex from '../CompAsciiToHex.tsx';
import LabelInputComponent from "../CompAsciiToHex.tsx"

test('Snapshat of CompAsciiToHex', () => {
    const tree = create(<CompAsciiToHex />)
    expect(tree.toJSON()).toMatchSnapshot()
});

test('handleClick should update the result', () => {
    const { getByText, getByTestId } = render(<CompAsciiToHex />);
    const button = getByText(/Convert/i); 
    fireEvent.click(button);
    const resultElement = getByTestId('span-testid');
    expect(resultElement.textContent).toBe('Result : 0xNaN');
});

describe("captures event from FirstComp", async () => {
    test('testing function converterTarget', () => {
        function converterTarget(evt: ChangeEvent<HTMLInputElement>) {
            expect(evt.target.value).toEqual("changedvalue");
        }
        render(
            <LabelInputComponent>
                <input
                    data-testid="testid--input"
                    type="text"
                    value=""
                    onChange={(evt: ChangeEvent<HTMLInputElement>) => converterTarget(evt)}
                />
            </LabelInputComponent>
        )
        const node = screen.getByTestId("testid--input");
        fireEvent.change(node, { target: { value: "changedvalue" }});
        expect(converterTarget).toBeDefined();
    })
});