import { test, expect } from "vitest"
import { create } from "react-test-renderer"
import CompBinaryDecimal from '../CompBinaryDecimal';

test('Snapshat of CompBinaryDecimal', () => {
    const tree = create(<CompBinaryDecimal />)
    expect(tree.toJSON()).toMatchSnapshot()
});