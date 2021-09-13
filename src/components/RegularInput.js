import tw from 'twin.macro';

// Styles
const StyledInputLabel = tw.label`text-sm font-normal block mb-2`;
const StyledInput = tw.input`appearance-none w-full max-w-md px-4 pt-2 pb-2.5 border border-chevyBlue-dark border-opacity-10 rounded focus:outline-none focus:ring-4 focus:ring-chevyTeal-light focus:border-chevyTeal transition duration-500 ease-in-out placeholder-chevyBlue-dark placeholder-opacity-40`;

function RegularInput({ labelName, type, placeholder, fieldName, register }) {
  return (
    <div>
      <StyledInputLabel htmlFor={fieldName}>{labelName}</StyledInputLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        id={fieldName}
        name={fieldName}
        {...register(fieldName)}
      />
    </div>
  );
}

export default RegularInput;
