import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", async () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Youtube/i,
    });

    expect(heading).toBeInTheDocument();

    await waitFor(() => screen.findByText(/Aimerの検索結果/i));

    const name = screen.getByText(/Official/i);
    expect(name).toBeInTheDocument();
  });
  it("検索ボタンクリック", async () => {
    render(<Home />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "aaa" } });

    const button = screen.getByRole("button", { name: "検索" });
    fireEvent.click(button);
    await waitFor(() => screen.findByText(/検索結果/i));
    expect(screen.getByText(/aaaの検索結果/i)).toBeInTheDocument();
  });
});
