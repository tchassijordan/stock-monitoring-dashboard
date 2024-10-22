import Select from 'react-select';
import './select.scss';

interface ISelectProps {
  value: string | number;
  options: IOption[];
  onSelect?: (value: string | number) => void;
  title: string;
  placeholder?: string;
}

interface IOption {
  label: string;
  value: string | number;
}

const StyledSelect = (props: ISelectProps) => {
  const { options, onSelect, title, placeholder } = props;

  return (
    <div className="select-container">
      <label htmlFor="percentage-change" className="select-label">
        {title}
      </label>
      <Select
        className="rs-select"
        options={options}
        placeholder={placeholder}
        value={options.find((option) => option.value === props.value) ?? null}
        onChange={(option) => {
          const value = option?.value;

          if (value) {
            onSelect?.(value);
          }
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#6297FF',
          },
        })}
        classNames={{
          indicatorSeparator: () => 'rs-indicator-separator',
          control: (state) =>
            `rs-control ${state.isFocused ? 'rs-control--is-focused' : ''}`,
          dropdownIndicator: () => 'rs-dropdown-indicator',
          container: (state) =>
            state.isFocused ? 'rs-select-container--is-focused' : '',
          menu: () => 'rs-menu',
        }}
      />
    </div>
  );
};

export default StyledSelect;
