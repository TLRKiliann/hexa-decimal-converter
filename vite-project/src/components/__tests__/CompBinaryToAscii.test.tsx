import { test, expect } from "vitest"
import { create } from "react-test-renderer"
import CompBinaryToAscii from '../CompBinaryToAscii';

test('Snapshat of CompBinaryToAscii', () => {
    const tree = create(<CompBinaryToAscii />)
    expect(tree.toJSON()).toMatchSnapshot()
});