import { render, screen, waitFor } from "@testing-library/react";
import Video from "@/pages/video";

describe("Video", () => {
  it("renders a heading", async () => {
    render(<Video />);

    const heading = screen.getByRole("heading", {
      name: /Video/i,
    });

    expect(heading).toBeInTheDocument();

    await waitFor(() => screen.findByText(/comment/i));

    const name = screen.getByText(/Z2Z9V-4DMGw/i);
    expect(name).toBeInTheDocument();
  });
});
