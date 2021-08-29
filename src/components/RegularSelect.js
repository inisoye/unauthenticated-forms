import tw from 'twin.macro';

// Icons
import ChevronDown from '../icons/ChevronDown';

// Styles
const StyledSelectLabel = tw.label`text-sm font-normal block mb-2!`;
const StyledSelectWrapper = tw.div`flex relative justify-between items-center w-full max-w-md rounded border border-chevyBlue-dark border-opacity-10 focus-within:ring-4 focus-within:ring-chevyTeal-light focus-within:border-chevyTeal mt-0! bg-white`;
const StyledSelect = tw.select`z-0 appearance-none w-full static px-4 pr-7 pt-2 pb-2.5 rounded focus:outline-none transition duration-500 ease-in-out placeholder-chevyBlue-dark placeholder-opacity-40 bg-transparent cursor-pointer`;
const StyledIconWrapper = tw.span`z-auto ml-auto absolute right-4`;

function RegularSelect({ labelName, fieldName, options, register }) {
  return (
    <>
      <StyledSelectLabel htmlFor={fieldName}>{labelName}</StyledSelectLabel>

      <StyledSelectWrapper>
        <StyledIconWrapper aria-hidden>
          <ChevronDown />
        </StyledIconWrapper>

        <StyledSelect name={fieldName} id={fieldName} {...register(fieldName)}>
          <option value="" disabled></option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </StyledSelect>
      </StyledSelectWrapper>
    </>
  );
}

export default RegularSelect;
