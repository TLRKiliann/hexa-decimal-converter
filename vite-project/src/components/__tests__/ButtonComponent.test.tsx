import { test, expect } from "vitest"
import { create } from "react-test-renderer"
import ButtonComponent from '../ButtonComponent';

test('Snapshat of ButtonComponent', () => {
    const tree = create(<ButtonComponent convertResult={function (): void {
        throw new Error("Function not implemented.");
    } } />)
    expect(tree.toJSON()).toMatchSnapshot()
});
