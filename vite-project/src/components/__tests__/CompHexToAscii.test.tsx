import { test, expect, describe, vi } from "vitest"
import { fireEvent, screen, render } from '@testing-library/react'
import { create } from "react-test-renderer"
import "@testing-library/jest-dom"
import CompHexToAscii from '../CompHexToAscii'
//import { ChangeEvent } from "react"
import LabelInputComponent from "../LabelInputComponent"

test('Snapshat of CompHexToAscii', () => {
    const tree = create(<CompHexToAscii />)
    expect(tree.toJSON()).toMatchSnapshot()
});

describe("testing children FirstComp", () => {
  test('testing function handleReverse', () => {
    const beverage = "tested";
    const convertResult = vi.fn(beverage => beverage)
    convertResult(beverage)
    render(
      <LabelInputComponent value={undefined} nameValue={""} converterTarget={function (): void {
        throw new Error("Function not implemented.")
      } }>
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
  
/*
describe("captures event from FirstComp", async () => {
  test('testing function converterTarget', () => {
    function converterTarget(evt: ChangeEvent<HTMLInputElement>) {
      expect(evt.target.value).toEqual("changedvalue");
    }
    render(
      <LabelInputComponent value={undefined} nameValue={""} 
        converterTarget={function (): void {
        }}>
        <input
          data-testid="testid-event"
          type="text"
          value=""
          onChange={(evt) => converterTarget(evt)}
        />
      </LabelInputComponent>
    )
    const node = screen.getByTestId("testid-event");
    fireEvent.change(node, { target: { value: "changedvalue" }});
    expect(converterTarget).toBeDefined();
  })
});
*/

/*
describe("testing children FirstComp", () => {
  test('testing function handleSubmit', () => {
    const beverage = {...["abc"], id: 2, name: "Doug", editor: false }
    const convertResult = vi.fn(beverage => beverage)
    convertResult(beverage)
    render(
      <CompHexToAscii>
        <button data-testid="testid-btn"">
          Enter
        </button>
      </CompHexToAscii>
    )
    fireEvent.submit(screen.getByTestId('testid'))
    expect(convertResult).toHaveReturnedWith({ 
      ...['abc'], id: 2, name: "Doug", editor: false 
    })
    expect(convertResult).toHaveBeenCalledTimes(1)
  })
});
*/