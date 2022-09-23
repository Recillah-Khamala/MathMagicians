import { render } from "@testing-library/react";
import Quote from "../pages/Quotes";
import Home from "../pages/Home";


describe("testing component", () => {
  test("testing Homepage", () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
 
});
