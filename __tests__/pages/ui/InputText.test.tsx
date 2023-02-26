import InputText from "@/components/ui/InputText";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("InputText", () => {
  it("renders", async () => {
    render(<InputText value="aaa" />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();

    expect(input).toHaveValue("aaa");
  });

  it("onChange", async () => {
    const handleChange = jest.fn();
    render(<InputText value="aaa" onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "bbb" } });
    expect(handleChange).toBeCalledTimes(1);
  });
});
