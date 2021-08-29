import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import VisuallyHidden from '@reach/visually-hidden';
import '@reach/menu-button/styles.css';
import tw, { styled } from 'twin.macro';

// Icons
import Logo from '../icons/Logo';
import LogoSmall from '../icons/LogoSmall';
import Hamburger from '../icons/Hamburger';
import SidebarClose from '../icons/SidebarClose';

// Custom Hooks
import useDialogControl from '../hooks/useDialogControl';

// Mobile Styles
const StyledMobileNavWrapper = tw.div`w-full py-4 px-6 md:px-8 text-sm flex justify-between items-center bg-chevyTeal-light bg-opacity-50`;
const StyledMobileMenuSidebar = styled(Dialog)`
  ${tw`min-h-full h-full overflow-auto w-3/5!	max-w-sm my-0 ml-0 text-sm p-0 bg-chevyBlue text-white border-r-4 border-chevyRed`}
  border-right-width: 6px;
`;
const StyledMobileMenuSidebarWrapper = styled.div`
  ${tw`block w-full h-full p-6 overflow-auto border-r-4 border-chevyTeal`}
  border-right-width: 6px;
`;
const StyledMobileMenuCloseButton = tw.button`block ml-auto mb-11`;
const StyledMobileMenuItem = tw.li`mb-12`;

// Desktop Styles
const StyledDesktopNavInnerWrapper = styled.div`
  ${tw`min-h-screen px-8 py-4 border-r-4 border-chevyTeal`}
  border-right-width: 6px;
`;
const StyledDesktopNavWrapper = styled.div`
  ${tw`min-h-screen border-r-4 border-chevyRed`}
  border-right-width: 6px;
`;
const StyledDesktopLogoContainer = tw(Link)`block mb-8 px-2.5`;
const StyleDesktopMenuLink = styled(NavLink)`
  ${tw`max-w-xs rounded block px-2.5 pt-2 pb-2.5 mb-3 transition duration-500 ease-in-out bg-transparent hover:bg-chevyTeal hover:bg-opacity-10`};
  &.selected {
    ${tw`bg-chevyTeal bg-opacity-20`};
  }
`;

// Sidebar is basically a header on mobile screens
function SideNav({ formPagesData }) {
  const { isDialogOpen, openDialog, closeDialog } = useDialogControl();

  const isBelowMedium = useMediaQuery({ minWidth: 0, maxWidth: 768 });

  const formPagesUrls = formPagesData?.map((pageData) => {
    const { url, id, name } = pageData;
    return { url, id, name };
  });

  const mobileSideNavLinks = formPagesUrls?.map(({ url, id, name }) => (
    <StyledMobileMenuItem key={id} onClick={closeDialog}>
      <Link to={url}>{name}</Link>
    </StyledMobileMenuItem>
  ));

  const desktopSideNavLinks = formPagesUrls?.map(({ url, id, name }) => (
    <li key={id}>
      <StyleDesktopMenuLink activeClassName="selected" to={url}>
        {name}
      </StyleDesktopMenuLink>
    </li>
  ));

  const mobileNav = (
    <>
      <Link to="/">
        <LogoSmall />
      </Link>

      <button type="button" onClick={openDialog}>
        <Hamburger />
      </button>

      <StyledMobileMenuSidebar
        isOpen={isDialogOpen}
        onDismiss={closeDialog}
        aria-label="Menu"
      >
        <StyledMobileMenuSidebarWrapper>
          <StyledMobileMenuCloseButton
            type="button"
            className="close-button"
            onClick={closeDialog}
          >
            <VisuallyHidden>Close Menu</VisuallyHidden>
            <span aria-hidden>
              <SidebarClose />
            </span>
          </StyledMobileMenuCloseButton>

          <nav>
            <ul>
              {mobileSideNavLinks}

              <li tw="pb-12">
                <a href="https://cemcscoop.com">Return home</a>
              </li>
            </ul>
          </nav>
        </StyledMobileMenuSidebarWrapper>
      </StyledMobileMenuSidebar>
    </>
  );

  const desktopNav = (
    <StyledDesktopNavInnerWrapper>
      <StyledDesktopLogoContainer to="/">
        <Logo />
      </StyledDesktopLogoContainer>

      <nav>
        <ul>
          {desktopSideNavLinks}{' '}
          <li tw="pt-8">
            <a
              href="https://cemcscoop.com"
              tw="max-w-xs rounded block px-2.5 pt-2 pb-2.5 mb-3 transition duration-500 ease-in-out bg-transparent hover:bg-chevyTeal hover:bg-opacity-10 text-chevyTeal"
            >
              Return home
            </a>
          </li>
        </ul>
      </nav>
    </StyledDesktopNavInnerWrapper>
  );

  return (
    <>
      {isBelowMedium ? (
        <StyledMobileNavWrapper>{mobileNav}</StyledMobileNavWrapper>
      ) : (
        <StyledDesktopNavWrapper>{desktopNav}</StyledDesktopNavWrapper>
      )}
    </>
  );
}

export default SideNav;
