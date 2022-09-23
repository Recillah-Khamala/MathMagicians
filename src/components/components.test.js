import { render, screen } from "@testing-library/react";
import Quote from "../pages/Quotes";
import Home from "../pages/Home";
import Calculator from './calculator';

describe("testing component", () => {
  test("testing Homepage", () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
  test("testing quote", () => {
    const quote = render(<Quote />);
    expect(quote).toMatchSnapshot();
  });
  test('testing calculator page', async() => {
    render(<Calculator />);
    const btn = await screen.findAllByRole('button');
    expect(btn).toHaveLength(19);
  });
});
