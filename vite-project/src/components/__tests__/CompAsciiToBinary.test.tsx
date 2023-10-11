import { test, expect } from "vitest"
import { create } from "react-test-renderer"
import CompAsciiToBinary from '../CompAsciiToBinary';

test('Snapshat of CompAsciiToBinary', () => {
    const tree = create(<CompAsciiToBinary />)
    expect(tree.toJSON()).toMatchSnapshot()
});