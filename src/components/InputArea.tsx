interface Props {
  placeholder: string;
  name: string;
  extra: string;
  register: any;
}

const InputArea = ({ placeholder, name, extra, register }: Props) => {
  return (
    <div className="w-full flex flex-col gap-2 ">
      <label className="font-semibold text-gray-600">{placeholder}</label>
      <p className="text-gray-400">{extra}</p>

      <textarea
        placeholder={placeholder}
        className="px-4 py-2 bg-gray-50 w-full border-2 rounded-md h-36"
        {...register(name)}
      />
    </div>
  );
};

export default InputArea;
