const FormField = ({ number, tag, type, id, placeholder, value, onChange }) => {
  return (
    <div>
      <hr />
      <div className="flex justify-baseline items-center mt-2 sm:mt-8">
        <div>
          <h1 className="m-5 sm:m-10 text-[#9C6A8C] font-bold">{number}</h1>
        </div>
        <div className="w-full">
          <h1 className="mx-5 mt-8 sm:mt-10 mb-3 text-2xl sm:text-3xl font-medium">
            {tag}
          </h1>
          <div className="ml-5 sm:mb-12 mb-9">
            <input
              type={type}
              onChange={(e) => {
                onChange(id, e.target.value);
              }}
              value={value}
              name="txt"
              id={id}
              placeholder={placeholder}
              className=" text-[#b0b0b2] py-3 outline-0 text-xl sm:text-2xl font-medium w-full overflow-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormField;
