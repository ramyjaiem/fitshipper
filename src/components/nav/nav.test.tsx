import { shallow } from "enzyme";
import React from "react";
import NavBar from ".";
import { AuthContext, AuthContextMock } from "../../contexts/auth.context";

describe("Testing navbar...", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<NavBar />);

    expect(component).toMatchSnapshot();
  });
  it("should dispaly name when user connected", () => {
    const TestComponent = () => (
      <AuthContext.Provider
        value={
          {
            user: { email: "Ramy Jaiem" },
          } as jest.Mocked<any>
        }
      >
        <NavBar />
      </AuthContext.Provider>
    );
    const element = shallow(<TestComponent />);
    expect(element.html()).toContain("Ramy Jaiem");
    expect(element).toMatchSnapshot();
  });
});
