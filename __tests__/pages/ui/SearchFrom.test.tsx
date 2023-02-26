import SearchForm from "@/components/ui/SearchFrom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("SearchForm", () => {
  it("renders", async () => {
    render(<SearchForm text="abc" />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("abc");

    const button = screen.getByRole("button", { name: "検索" });
    expect(button).toBeInTheDocument();
  });
  it("change input value", async () => {
    render(<SearchForm text="abc" />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "bbb" } });

    expect(input).toHaveValue("bbb");
  });
  it("onChange", async () => {
    const handleChange = jest.fn();
    render(<SearchForm text="abc" onChange={handleChange} />);

    expect(handleChange).toBeCalledTimes(0);

    const button = screen.getByRole("button", { name: "検索" });
    fireEvent.click(button);

    expect(handleChange).toBeCalledTimes(1);
  });
});
