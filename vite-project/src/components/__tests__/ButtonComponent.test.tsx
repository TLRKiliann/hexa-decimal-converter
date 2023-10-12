import { test, expect, vi } from "vitest"
import { create } from "react-test-renderer"
import ButtonComponent from '../ButtonComponent';

//test ok
test('Snapshat of ButtonComponent', () => {
    const tree = create(<ButtonComponent convertResult={function (): void {
        throw new Error("Function not implemented.");
    } } />)
    expect(tree.toJSON()).toMatchSnapshot()
});

test('convertResult return boolean', () => {
    const beverage = "yeah";
    const convertResult = vi.fn(beverage => beverage)
    convertResult(beverage)
    expect(convertResult).toHaveReturnedWith("yeah")
    expect(convertResult).toHaveBeenCalledTimes(1)
});
    
test("testing if convertResult function is present", () => {
    const convertResult = vi.fn();
    expect(convertResult).toBeDefined()
});