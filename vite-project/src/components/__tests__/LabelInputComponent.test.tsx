import { test, expect } from "vitest"
import { create } from "react-test-renderer"
import LabelInputComponent from '../LabelInputComponent';
import { ChangeEvent } from "react";

test('Snapshat of LabelInputComponent', () => {
    const tree = create(<LabelInputComponent value={undefined} nameValue={""} 
        converterTarget={function (_event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
    } } children={""} />)
    expect(tree.toJSON()).toMatchSnapshot()
});