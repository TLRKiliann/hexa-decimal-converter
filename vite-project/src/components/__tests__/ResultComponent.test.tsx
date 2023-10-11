import { test, expect } from "vitest"
import { create } from "react-test-renderer"
import ResultComponent from '../ResultComponent';

test('Snapshat of ResultComponent', () => {
    const tree = create(<ResultComponent result={undefined} />)
    expect(tree.toJSON()).toMatchSnapshot()
});