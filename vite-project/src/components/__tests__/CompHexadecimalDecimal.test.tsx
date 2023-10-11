import { test, expect } from "vitest"
import { create } from "react-test-renderer"
import CompHexadecimalDecimal from '../CompHexadecimalDecimal';

test('Snapshat of CompHexadecimalDecimal', () => {
    const tree = create(<CompHexadecimalDecimal />)
    expect(tree.toJSON()).toMatchSnapshot()
});