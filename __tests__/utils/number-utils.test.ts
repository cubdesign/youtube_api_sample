import { zeroPadding } from "@/utils/number-utils";
import { render, screen, waitFor } from "@testing-library/react";

describe("zeroPadding", () => {
  it("number format zero padding ", () => {
    expect(zeroPadding(1, 2)).toBe("01");
    expect(zeroPadding(10, 2)).toBe("10");
    expect(zeroPadding(50, 3)).toBe("050");
  });

  it("paddingが設定されない場合は、0埋めしない", () => {
    expect(zeroPadding(1)).toBe("1");
    expect(zeroPadding(10)).toBe("10");
    expect(zeroPadding(50)).toBe("50");
  });
});
