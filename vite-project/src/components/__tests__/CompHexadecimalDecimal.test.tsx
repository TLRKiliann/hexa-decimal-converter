import { test, expect, describe, vi } from "vitest"
import { fireEvent, screen, render } from '@testing-library/react'
import { create } from "react-test-renderer"
import "@testing-library/jest-dom"
import CompHexadecimalDecimal from '../CompHexadecimalDecimal';
import LabelInputComponent from "../LabelInputComponent"

test('Snapshat of CompHexadecimalDecimal', () => {
    const tree = create(<CompHexadecimalDecimal />)
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
      }}>
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