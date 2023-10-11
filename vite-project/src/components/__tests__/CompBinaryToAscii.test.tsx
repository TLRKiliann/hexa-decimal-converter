import { test, expect, vi } from "vitest"
import { render } from '@testing-library/react'
import { create } from "react-test-renderer"
import "@testing-library/jest-dom"
import CompBinaryToAscii from '../CompBinaryToAscii'
import ResultComponent from "../ResultComponent"
//import LabelInputComponent from "../LabelInputComponent"
//import { ChangeEvent } from "react";

test('Snapshat of CompBinaryToAscii', () => {
    const tree = create(<CompBinaryToAscii />)
    expect(tree.toJSON()).toMatchSnapshot()
});

test('convertResult return yeah', () => {
    const beverage = "yeah";
    const convertResult = vi.fn(beverage => beverage)
    convertResult(beverage)
    render(
        <ResultComponent result={"yeah"} />
    );
    //fireEvent.click(screen.getByTestId('testid-btn'))
    expect(convertResult).toHaveReturnedWith("yeah")
    expect(convertResult).toHaveBeenCalledTimes(1)
});
/*
describe("captures event from FirstComp", async () => {
    test('testing function handleEventChange', () => {
        function handleEventChange(evt: ChangeEvent<HTMLInputElement>) {
        expect(evt.target.value).toEqual("changedvalue");
        }
        render(
        <LabelInputComponent value={undefined} nameValue={""}>
            <input
            data-testid="testid-event"
            type="text"
            value=""
            onChange={(evt) => handleEventChange(evt)}
            />
        </LabelInputComponent>
        )
        //const node = screen.getByTestId("testid-input");
        //fireEvent.change(node, { target: { value: "changedvalue" }});
        expect(handleEventChange).toBeDefined();
    })
});
*/