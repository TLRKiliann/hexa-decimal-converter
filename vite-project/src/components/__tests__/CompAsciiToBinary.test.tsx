import { ChangeEvent } from "react";
import { test, expect, describe } from "vitest"
import { fireEvent, screen, render } from '@testing-library/react'
import { create } from "react-test-renderer"
import "@testing-library/jest-dom"
import CompAsciiToBinary from '../CompAsciiToBinary.tsx';
import LabelInputComponent from "../CompAsciiToBinary.tsx"
//import ResultComponent from "../CompAsciiToBinary.tsx";

test('Snapshat of CompAsciiToBinary', () => {
    const tree = create(<CompAsciiToBinary />)
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
  const { getByText, getByTestId } = render(<CompAsciiToBinary />);
  const button = getByText(/Convert/i); 
  fireEvent.click(button);
  const resultElement = getByTestId('span-testid');
  expect(resultElement.textContent).toBe('Result : Not binary !!!');
});

/*
// Works but nothing has changed.
test('Snapshat of CompAsciiToBinary', () => {
    const tree = create(<LabelInputComponent />)
    expect(tree.toJSON()).toMatchSnapshot()
});

test('Snapshat of CompAsciiToBinary', () => {
    const tree = create(<ResultComponent />)
    expect(tree.toJSON()).toMatchSnapshot()
});

describe('click + event', () => {
    test('click', () => {
      const bev = false;
      const handleClick = vi.fn(bev => !bev)
      handleClick(bev)
      render(
        <button data-testid="testid-btn">
          Convert
        </button>
      );
      fireEvent.click(screen.getByTestId('testid-btn'));
      expect(screen.getByText(/Convert/i)).toBeInTheDocument();
      expect(handleClick).toHaveReturnedWith(true);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test("captures value from ThirdComp", () => {
      function converterTarget(evt: ChangeEvent<HTMLInputElement>) {
        expect(evt.target.value).toEqual("changedvalue");
      }
      render(
        <input 
          data-testid="testid-input"
          onChange={(evt) => converterTarget(evt)}
        />
      );
      const node = screen.getByTestId("testid-input");
      fireEvent.change(node, { target: { value: "changedvalue" } });
    });
  });
  */