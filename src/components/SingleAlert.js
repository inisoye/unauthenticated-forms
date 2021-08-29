import React from 'react';
import tw, { styled } from 'twin.macro';
import SingleAlert from '@reach/alert';
import VisuallyHidden from '@reach/visually-hidden';

// Icons
import CloseIcon from '../icons/SidebarClose';

const statusVariants = {
  confirmation: tw`bg-green-700`,
  error: tw`bg-red-600`,
  neutral: tw`bg-chevyBlue-dark`,
};

const StyledAlert = styled(SingleAlert)(() => [
  tw`fixed top-0 left-0 w-full text-sm text-center text-white`,
  ({ variant = 'error' }) => statusVariants[variant],
  ({ isHidden }) => isHidden && tw`hidden`,
]);

const StyledAlertContentWrapper = styled.div`
  max-width: 1110px;

  ${tw`flex items-center justify-between w-full px-4 m-auto md:px-16`};
`;

const StyledAlertText = tw.span`pt-2.5 pb-3 inline-block`;

const closeButtonVariants = {
  confirmation: tw`hover:bg-green-600 focus:ring-green-400`,
  error: tw`hover:bg-red-500 focus:ring-red-400`,
  neutral: tw`hover:bg-blue-900 focus:ring-blue-800`,
};

const StyledAlertCloseButton = styled.button(() => [
  ({ variant = 'error' }) => closeButtonVariants[variant],

  tw`p-2 my-2 transition duration-500 ease-in-out bg-transparent rounded-full focus:outline-none focus:ring-4`,
]);

function SingleAlertComponent({ variant, message }) {
  const [isHidden, setIsHidden] = React.useState(false);

  return (
    <StyledAlert variant={variant} {...{ isHidden }}>
      <StyledAlertContentWrapper>
        <StyledAlertText>{message}</StyledAlertText>

        <StyledAlertCloseButton
          variant={variant}
          onClick={() => setIsHidden(true)}
        >
          <VisuallyHidden>Close alert</VisuallyHidden>

          <span aria-hidden>
            <CloseIcon color="white" />
          </span>
        </StyledAlertCloseButton>
      </StyledAlertContentWrapper>
    </StyledAlert>
  );
}

export default SingleAlertComponent;
