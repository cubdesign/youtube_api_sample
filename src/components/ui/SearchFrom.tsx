import { FC, useState } from "react";
import InputText from "./InputText";

export type SearchFormProps = {
  text: string;
  onChange?: (value: string) => void;
};

const SearchForm: FC<SearchFormProps> = ({ text, onChange }) => {
  const [inputText, setInputText] = useState<string>(text);
  const handleChangeInput = (value: string) => {
    setInputText(value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputText);
    if (onChange) onChange(inputText);
  };

  return (
    <div>
      <InputText value={inputText} onChange={handleChangeInput} />
      <button onClick={handleClick}>検索</button>
    </div>
  );
};

export default SearchForm;
