import { zeroPadding } from "./number-utils";

export const getFormattedDateTime = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = zeroPadding(date.getHours(), 2);
  const minutes = zeroPadding(date.getMinutes(), 2);
  const seconds = zeroPadding(date.getSeconds(), 2);

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
};
