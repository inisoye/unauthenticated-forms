import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import tw, { styled } from 'twin.macro';

// Components
import FormConfirmationModal from '../components/FormConfirmationModal';

// Custom hooks
import useDialogControl from '../hooks/useDialogControl';

// Utils
import renderRelevantInput from '../utils/renderRelevantInput';
import convertCamelCaseToSentenceCase from '../utils/convertCamelCaseToSentenceCase';
import selectRelevantSchema from '../utils/selectRelevantSchema';
import FormPageHeader from '../components/FormPageHeader';

// Icons
import ErrorExclamation from '../icons/ErrorExclamation';

// Styles
const StyledPageContentContainer = tw.div`p-6 md:px-20`;
const StyledExplanationMessage = tw.p`mb-6 p-4 bg-chevyBlue text-white rounded max-w-md leading-6`;
const StyledForm = tw.form`space-y-6`;
const StyledFormLegend = tw.legend`font-semibold text-base mb-3`;
const StyledConfirmationSection = tw.div`mb-8`;
const StyledCheckboxWrapper = styled.label`
  ${tw`cursor-pointer flex items-start space-x-4 bg-white w-full max-w-md px-4 pt-2 py-2.5 rounded border border-chevyBlue-dark border-opacity-10 focus-within:ring-4 focus-within:ring-chevyTeal-light focus-within:border-chevyTeal transition duration-500 ease-in-out`};
`;
const StyledCheckboxText = tw.span`pb-0.5 text-chevyBlue-dark text-opacity-40`;
const StyledCheckbox = styled.input`
  ${tw`h-5 w-5 flex-shrink-0 mt-1.5 border rounded appearance-none border-chevyBlue-dark border-opacity-20 checked:bg-chevyTeal focus:outline-none`};

  &:checked + span {
    ${tw`text-chevyTeal`}
  }
`;
const StyledInputErrorMessage = tw.p`text-red-600 text-xs mt-1.5 flex items-center`;
const StyledInputErrorMessageText = tw.span`ml-2 pb-0.5`;
const StyledContinueButton = tw.button`my-10! text-white w-full max-w-md pt-2 pb-2.5 bg-chevyRed hover:bg-red-800 transition duration-500 ease-in-out rounded focus:outline-none focus:ring-4 focus:ring-red-300`;

function SingleFormPage({ name: formName, data }) {
  const { isDialogOpen, openDialog, closeDialog } = useDialogControl();

  const { fixedData, inputGroups, confirmationMessage, explanationMessage } =
    data;

  // Generate a schema object from inputGroups object
  let schemaObject = inputGroups
    .map((i) => i.inputs)
    .flat()
    .reduce((finalObject, item) => {
      return selectRelevantSchema(finalObject, item);
    }, {});

  // Add confirmation message to schemaObject
  schemaObject = {
    ...schemaObject,
    confirmationMessage: yup
      .boolean()
      .oneOf([true], 'This field must be ticked before you can submit'),
  };

  const schema = yup.object().shape(schemaObject);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const formValues = useWatch({ control });

  const formValuesArray = Object.keys(formValues).map((key, index) => ({
    id: fixedData.length + index + 1,
    camelCaseProperty: key,
    property: convertCamelCaseToSentenceCase(key),
    value: formValues[key],
    editable: true,
  }));

  const completeFormData = [...fixedData, ...formValuesArray];

  const inputComponents = inputGroups.map(({ name, inputs, id }) => {
    return (
      <fieldset key={id}>
        <StyledFormLegend>{name}</StyledFormLegend>

        {inputs.map(
          ({ type, labelName, fieldName, id, options, placeholder }) => (
            <React.Fragment key={id}>
              {renderRelevantInput(
                type,
                labelName,
                fieldName,
                placeholder,
                options,
                register,
                control,
                errors
              )}
            </React.Fragment>
          )
        )}
      </fieldset>
    );
  });

  const handleContinueClick = () => {
    openDialog();
  };

  return (
    <>
      <FormPageHeader formName={formName} />

      <StyledPageContentContainer>
        <StyledExplanationMessage>
          {explanationMessage}
        </StyledExplanationMessage>

        <StyledForm method="/">
          {inputComponents}

          <StyledConfirmationSection>
            <StyledCheckboxWrapper htmlFor="confirmationMessage">
              <StyledCheckbox
                type="checkbox"
                name="confirmationMessage"
                id="confirmationMessage"
                {...register('confirmationMessage')}
              />

              <StyledCheckboxText tw="leading-6">
                confirmationMessage}
              </StyledCheckboxText>
            </StyledCheckboxWrapper>
            {errors.confirmationMessage && (
              <StyledInputErrorMessage>
                {<ErrorExclamation />}
                <StyledInputErrorMessageText>
                  {errors.confirmationMessage?.message}
                </StyledInputErrorMessageText>
              </StyledInputErrorMessage>
            )}
          </StyledConfirmationSection>

          {/* Acts as a fake submit button, mainly for vaildation */}
          <StyledContinueButton
            type="button"
            onClick={handleSubmit(handleContinueClick)}
          >
            Continue to submission
          </StyledContinueButton>

          <FormConfirmationModal
            confirmationMessage={confirmationMessage}
            completeFormData={completeFormData}
            register={register}
            isDialogOpen={isDialogOpen}
            closeDialog={closeDialog}
          />
        </StyledForm>
      </StyledPageContentContainer>
    </>
  );
}

export default SingleFormPage;
