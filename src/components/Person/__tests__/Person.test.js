import { screen, getByRole } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { Person } from "..";
import { renderConnected } from "../../../test-utils/render-connected";

describe("Person", () => {
  test("should render the attributes passed to it correctly", () => {
    const handleClick = jest.fn();
    const params = {
      avatar:
        "https://gravatar.com/avatar/543c9c9041d36fab4dec68d545b2ffe2?s=400&d=robohash&r=x",
      firstName: "Jorge",
      lastName: "Parga",
      age: "8",
      onClick: handleClick,
    };

    renderConnected(<Person {...params} />, {});
    const name = screen.getByText(/Jorge Parga/i);
    const age = screen.getByText(/He is 8 years old/i);
    const button = screen.getByRole("button");
    const avatar = screen.getByRole("img");
    expect(name).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
