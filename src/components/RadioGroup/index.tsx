"use client";

import clsx from 'clsx';

type RadioProps = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Radio = ({
  name,
  value,
  label,
  checked,
  onChange,
  className,
}: RadioProps) => {

  const radioClasses = clsx(
    'flex items-center space-x-2',
    className
  );

  return (
    <>
      
      <label
        className="mt-px flex pl-[0.15rem] hover:cursor-pointer"
        >
          <input
            className={radioClasses}
            type="radio"
            name={name}
            value = {value}
            onChange={onChange}
            // {...attr}
            defaultChecked = {checked}
          />
          <span className='ml-2'>{label}</span>
      </label>
    </>
    
  );
};

type RadioOption = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  name: string;
  options: RadioOption[];
  checkedValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  direction?: 'horizontal' | 'vertical'; // added prop here
};

const RadioGroup = ({
  name,
  options,
  checkedValue = "",
  onChange,
  className = "",
  direction = 'vertical', // added default value here
}: RadioGroupProps) => {
    
  const radioGroupClasses = clsx(
    'flex',
    direction === 'horizontal' ? 'flex-row space-x-2 items-center' : 'flex-col space-y-2', // changed classes here
    className
  );

  return (
    <div className={radioGroupClasses}>
      {options.map((option, i) => (
        <Radio
          key={i}
          name={name}
          value={option.value}
          label={option.label}
          checked={checkedValue === option.value}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
