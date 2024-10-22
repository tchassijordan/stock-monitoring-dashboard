import './select.scss';

interface ISelectProps {
  value: string | number;
  options: IOption[];
  onSelect?: (value: string | number) => void;
  title: string;
}

interface IOption {
  label: string;
  value: string | number;
}

const Select = (props: ISelectProps) => {
  const { value, options, onSelect, title } = props;

  return (
    <div className="select-container">
      <label htmlFor="percentage-change" className="select-label">
        {title}
      </label>
      <select
        name="percentage-change"
        id="percentage-change"
        value={value}
        onChange={(e) => onSelect?.(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
