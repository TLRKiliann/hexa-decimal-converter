import { test, expect } from "vitest"
import { create } from "react-test-renderer"
import CompAsciiToHex from '../CompAsciiToHex';

test('Snapshat of CompAsciiToHex', () => {
    const tree = create(<CompAsciiToHex />)
    expect(tree.toJSON()).toMatchSnapshot()
});