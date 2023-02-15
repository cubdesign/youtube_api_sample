import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", async () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Youtube/i,
    });

    expect(heading).toBeInTheDocument();

    await waitFor(() => screen.findByText(/検索結果/i));

    const name = screen.getByText(/Official/i);
    expect(name).toBeInTheDocument();
  });
});
