import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", async () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Youtube/i,
    });

    expect(heading).toBeInTheDocument();

    await waitFor(() => screen.findByText(/comment/i));

    const name = screen.getByText(/Z2Z9V-4DMGw/i);
    expect(name).toBeInTheDocument();
  });
});
