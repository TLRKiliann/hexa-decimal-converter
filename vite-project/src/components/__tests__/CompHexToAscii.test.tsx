import { test, expect } from "vitest"
import { create } from "react-test-renderer"
import CompHexToAscii from '../CompHexToAscii';

test('Snapshat of CompHexToAscii', () => {
    const tree = create(<CompHexToAscii />)
    expect(tree.toJSON()).toMatchSnapshot()
});