import { FC } from "react";

export type InputTextProps = {
  value: string;
  onChange?: (value: string) => void;
};

const InputText: FC<InputTextProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default InputText;
