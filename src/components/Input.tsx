interface Props {
  placeholder: string;
  name: string;
  label?: string;
  className?: string;
  type?: string;
  register?: any;
  onChange?: Function;
  value?: string;
}

const Input = ({
  placeholder,
  name,
  register,
  label,
  className,
  onChange,
  type,
  value,
}: Props) => {
  return (
    <div className={`w-full flex flex-col gap-2 mt-6 ${className}`}>
      {label && <label className="font-semibold text-gray-500">{label}</label>}
      <input
        key={name}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        className="px-4 py-2 bg-gray-50  w-full border-2 rounded-md"
        {...(register && register(name))}
      />
    </div>
  );
};

export default Input;
