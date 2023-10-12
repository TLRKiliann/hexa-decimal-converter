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
