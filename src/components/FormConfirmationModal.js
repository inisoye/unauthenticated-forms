import React from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import VisuallyHidden from '@reach/visually-hidden';
import { format } from 'date-fns';
import tw from 'twin.macro';

// Utils
import isDate from '../utils/isDate';

// Icons
import CloseIcon from '../icons/ModalClose';

// Custom Hooks
import { usePostSubmission } from '../hooks/useFormSubmission';

// Styles
const StyledModal = tw(Dialog)`w-11/12 md:max-w-xl text-sm rounded-lg md:p-8`;
const StyledCloseDialogButton = tw.button`p-1.5 mt-1 hover:bg-chevyTeal-light rounded focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-opacity-60 transition duration-500 ease-in-out`;
const StyledModalHeader = tw.div`flex items-start space-x-2 mb-3`;
const StyledModalHeaderLeft = tw.div`w-11/12`;
const StyledModalHeading = tw.h1`text-2xl md:text-3xl tracking-tighter mb-4`;
const StyledModalSubHeading = tw.p`text-chevyRed`;
const StyledModalTable = tw.table`w-full mb-8`;
const StyledModalTableRow = tw.tr`flex justify-between border-b border-chevyBlue-dark border-opacity-10`;
const StyledModalTableCell = tw.td`p-5 pl-1.5  text-left font-normal text-chevyBlue-dark`;
const StyledModalTableCellLeft = tw(
  StyledModalTableCell
)`text-opacity-50 flex items-center space-x-2`;
const StyledModalTableEditButton = tw.button`underline text-chevyTeal hover:text-chevyBlue text-opacity-100 text-xs transition duration-500 ease-in-out`;
const StyledModalTableCellRight = tw(
  StyledModalTableCell
)`text-right w-1/2 text-opacity-100`;
const StyledSubmitButton = tw.button`text-white w-full pt-2 pb-2.5 bg-chevyBlue hover:bg-chevyTeal transition duration-500 ease-in-out rounded focus:outline-none focus:ring-4 focus:ring-chevyTeal-light`;

function FormConfirmationModal({
  confirmationMessage,
  completeFormData,
  register,
  isDialogOpen,
  closeDialog,
}) {
  const submissionMutation = usePostSubmission();
  // const { isError, isLoading } = submissionMutation;

  function handleSubmission(event) {
    event.preventDefault();
    submissionMutation.mutate(completeFormData);
    console.log(completeFormData);
  }

  return (
    <StyledModal
      isOpen={isDialogOpen}
      onDismiss={closeDialog}
      aria-label="Confirm your details"
    >
      <StyledModalHeader>
        <StyledModalHeaderLeft>
          <StyledModalHeading>Confirm your details</StyledModalHeading>
          <StyledModalSubHeading>
            Ensure the following details are correct before submitting your
            request
          </StyledModalSubHeading>
        </StyledModalHeaderLeft>

        <StyledCloseDialogButton
          type="button"
          className="close-button"
          onClick={closeDialog}
        >
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>
            <CloseIcon />
          </span>
        </StyledCloseDialogButton>
      </StyledModalHeader>

      <StyledModalTable>
        <thead>
          <tr>
            <th>
              <VisuallyHidden>Properties</VisuallyHidden>
            </th>
            <th>
              <VisuallyHidden>Values</VisuallyHidden>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Prevent state of confirmation message from showing up in modal */}
          {completeFormData
            .filter((data) => data.camelCaseProperty !== 'confirmationMessage')
            .map(({ id, property, value, editable, camelCaseProperty }) => {
              return (
                <React.Fragment key={id}>
                  <StyledModalTableRow>
                    <StyledModalTableCellLeft>
                      <span>{property}</span>{' '}
                      {editable && (
                        <StyledModalTableEditButton onClick={closeDialog}>
                          edit
                        </StyledModalTableEditButton>
                      )}
                    </StyledModalTableCellLeft>
                    {/* Render edited date if value is a date */}
                    <StyledModalTableCellRight>
                      {isDate(value) ? format(value, 'd MMM yyyy') : value}
                    </StyledModalTableCellRight>
                  </StyledModalTableRow>
                </React.Fragment>
              );
            })}
        </tbody>
      </StyledModalTable>

      <StyledSubmitButton type="submit" onClick={handleSubmission}>
        Submit
      </StyledSubmitButton>
    </StyledModal>
  );
}

export default FormConfirmationModal;
