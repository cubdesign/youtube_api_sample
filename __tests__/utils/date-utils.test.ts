import { getFormattedDateTime } from "@/utils/date-utils";
import { render, screen, waitFor } from "@testing-library/react";

describe("getFormattedDateTime", () => {
  it("should return the date in the format yyyy/mm/dd HH:mm:dd", () => {
    const date = new Date(2020, 0, 15, 23, 20, 30);
    const formattedDate = getFormattedDateTime(date);
    expect(formattedDate).toBe("2020/1/15 23:20:30");
  });
  it("hours, minutes,seconds format zero padding ", () => {
    const date = new Date(2020, 0, 15, 1, 2, 3);
    const formattedDate = getFormattedDateTime(date);
    expect(formattedDate).toBe("2020/1/15 01:02:03");
  });
});
