import { test, expect } from "vitest"
//import { fireEvent, screen, render } from '@testing-library/react'
import { create } from "react-test-renderer"
import "@testing-library/jest-dom"
import ResultComponent from '../ResultComponent';

test('Snapshat of ResultComponent', () => {
    const tree = create(<ResultComponent result={undefined} />)
    expect(tree.toJSON()).toMatchSnapshot()
});