import { useMediaQuery } from 'react-responsive';
import tw from 'twin.macro';

// Components
import AvatarButton from '../components/AvatarButton';

// Styles
const StyledPageHeaderWrapper = tw.header`px-6 md:px-20 pt-3 pb-3.5 md:py-4 bg-chevyTeal-light bg-opacity-50 md:bg-opacity-60 border-b border-chevyBlue-dark border-opacity-10 md:flex md:justify-between`;
const StyledPageHeading = tw.h1`text-2xl md:text-3xl tracking-tighter md:pt-12`;

function FormPageHeader({ formName }) {
  const isBelowMedium = useMediaQuery({ minWidth: 0, maxWidth: 768 });

  return (
    <StyledPageHeaderWrapper>
      <StyledPageHeading>{formName}</StyledPageHeading>

      {/* Avatar is displayed in SideNav component on mobile screens */}
      {!isBelowMedium && <AvatarButton />}
    </StyledPageHeaderWrapper>
  );
}

export default FormPageHeader;
