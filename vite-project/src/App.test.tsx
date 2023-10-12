import { test, expect } from "vitest"
import { create } from "react-test-renderer"
import App from './App';

test('Snapshat of App', () => {
    const tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot()
});