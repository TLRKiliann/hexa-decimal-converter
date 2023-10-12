import { ChangeEvent } from "react"
import { test, expect, describe } from "vitest"
import { fireEvent, screen, render } from '@testing-library/react'
import { create } from "react-test-renderer"
import "@testing-library/jest-dom"
import CompHexToAscii from '../CompHexToAscii.tsx'
import LabelInputComponent from '../CompHexToAscii.tsx'

test('Snapshat of CompHexToAscii', () => {
    const tree = create(<CompHexToAscii />)
    expect(tree.toJSON()).toMatchSnapshot()
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

test('handleClick should update the result', () => {
  const { getByText, getByTestId } = render(<CompHexToAscii />);
  const button = getByText(/Convert/i); 
  fireEvent.click(button);
  const resultElement = getByTestId('span-testid');
  expect(resultElement.textContent).toBe('Result : \u0000');
});