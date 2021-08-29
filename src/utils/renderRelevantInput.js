import tw from 'twin.macro';

// Components
import RegularInput from '../components/RegularInput';
import RegularSelect from '../components/RegularSelect';
import DateInput from '../components/DateInput';

// Icons
import ErrorExclamation from '../icons/ErrorExclamation';

// Styles
const StyledInputItemContainer = tw.div`mb-3.5`;
const StyledInputErrorMessage = tw.p`text-red-600 text-xs mt-1.5 flex items-center`;
const StyledInputErrorMessageText = tw.span`ml-2 pb-0.5`;

const renderRelevantInput = (
  type,
  labelName,
  fieldName,
  placeholder,
  options,
  register,
  control,
  errors
) => {
  switch (type) {
    case 'text':
    case 'number': {
      return (
        <StyledInputItemContainer>
          <RegularInput
            type={type}
            labelName={labelName}
            fieldName={fieldName}
            options={options}
            placeholder={placeholder}
            register={register}
          />
          {errors[fieldName] && (
            <StyledInputErrorMessage>
              {<ErrorExclamation />}
              <StyledInputErrorMessageText>
                {errors[fieldName]?.message}
              </StyledInputErrorMessageText>
            </StyledInputErrorMessage>
          )}
        </StyledInputItemContainer>
      );
    }

    case 'select': {
      return (
        <StyledInputItemContainer>
          <RegularSelect
            labelName={labelName}
            fieldName={fieldName}
            options={options}
            placeholder={placeholder}
            register={register}
          />
          {errors[fieldName] && (
            <StyledInputErrorMessage>
              {<ErrorExclamation />}
              <StyledInputErrorMessageText>
                {errors[fieldName]?.message}
              </StyledInputErrorMessageText>
            </StyledInputErrorMessage>
          )}
        </StyledInputItemContainer>
      );
    }

    case 'date': {
      return (
        <StyledInputItemContainer>
          <DateInput
            labelName={labelName}
            fieldName={fieldName}
            placeholder={placeholder}
            control={control}
          />
          {errors[fieldName] && (
            <StyledInputErrorMessage>
              {<ErrorExclamation />}
              <StyledInputErrorMessageText>
                {errors[fieldName]?.message}
              </StyledInputErrorMessageText>
            </StyledInputErrorMessage>
          )}
        </StyledInputItemContainer>
      );
    }

    default: {
      throw new Error(`Unsupported input type: ${type}`);
    }
  }
};

export default renderRelevantInput;
