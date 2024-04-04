
const CustomInput = (
    { register,
        errors,
        name,
        isRequired,
        type,
        placeholder,
        isTextArea, }) => {

    const validations = {};
    if (isRequired) {
        validations.required = "This field is required";
    }
    return (
        <>

            <label className="input input-bordered flex items-center gap-2">
                <input
                    type={type}
                    className="grow"
                    placeholder={placeholder}
                    {...register(name, validations)}
                />


            </label>
            {(errors[name] && errors[name]?.message)
                &&
                <div>
                    <h2 className='text-red-600'>{errors[name]?.message}</h2>
                </div>
            }
        </>
    );
};

export default CustomInput;
