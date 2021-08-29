import React from 'react';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import VisuallyHidden from '@reach/visually-hidden';
import '@reach/menu-button/styles.css';
import tw from 'twin.macro';

// Utils
import getInitials from '../utils/getInitals';

// Hooks
import useLogOut from '../hooks/useLogOut';

// Styles
const StyledMenuButton = tw(
  MenuButton
)`bg-chevyBlue-dark rounded-full w-10 h-10 pb-1 flex justify-center items-center focus:outline-none focus:ring-4 focus:ring-blue-200 hidden`;
const StyledMenuButtonText = tw.span`text-white text-xs`;
const StyledMenuList = tw(
  MenuList
)`border border-chevyBlue-dark! mt-2 rounded border-opacity-10!`;
const StyledMenuItem = tw(
  MenuItem
)`hover:bg-chevyTeal-light! text-chevyBlue-dark! pb-2! text-sm transition duration-500 ease-in-out`;

function HeaderAvatarButton() {
  function getSavedUserInitials() {
    // Obtain saved name from local storage
    const nameString = window.localStorage.getItem('loggedCEMCSUserName');
    const userName =
      nameString === 'undefined' ? undefined : JSON.parse(nameString);
    // Obtain initials from name

    return userName && getInitials(userName);
  }

  const [loggedUserInitials] = React.useState(getSavedUserInitials);

  const logOut = useLogOut();

  return (
    <Menu>
      <StyledMenuButton>
        <div aria-hidden>
          <StyledMenuButtonText>{loggedUserInitials}</StyledMenuButtonText>
        </div>
        <VisuallyHidden>
          {window.localStorage.getItem('loggedCEMCSUserName')}
        </VisuallyHidden>
      </StyledMenuButton>

      <StyledMenuList>
        <StyledMenuItem onSelect={logOut}>Log Out</StyledMenuItem>
      </StyledMenuList>
    </Menu>
  );
}

export default HeaderAvatarButton;
