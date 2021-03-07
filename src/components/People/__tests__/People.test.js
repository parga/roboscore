import { screen } from "@testing-library/react";
import configureStore from "../../../configure-store";
import { People } from "../";
import { renderConnected } from "../../../test-utils/render-connected";

describe("Person", () => {
  test("People should render whatever content is passed to it", () => {
    renderConnected(
      <People>
        <span>Hello !</span>
      </People>,
      {}
    );
    const randomText = screen.getByText(/Hello !/i);
    expect(randomText).toBeInTheDocument();
  });
});
