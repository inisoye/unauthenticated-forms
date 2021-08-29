// src/styles/GlobalStyles.js
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    font-family: Ilisarniq, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; 
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};

    ${tw`antialiased text-chevyBlue-dark`};
  }

  h1,
  h2,
  h3,
  h4
  h5,
  h6,
  .react-datepicker__current-month {
   font-weight: 600;
   font-family: Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; 
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
   ${tw`text-chevyBlue-dark`};
  }

  ${'' /* react-datepicker overrides */}
 .react-datepicker__input-container input {
    ${tw`w-full max-w-md px-4 pt-2 pb-2.5 border border-chevyBlue-dark border-opacity-10 rounded focus:outline-none focus:ring-4 focus:ring-chevyTeal-light focus:border-chevyTeal transition duration-500 ease-in-out placeholder-chevyBlue-dark placeholder-opacity-40 cursor-pointer mt-2`};
  }

  ${'' /* Full calendar container */}
  .react-datepicker{
    ${tw`border-0 border-chevyBlue-dark`};
  }

  ${'' /* Calendar header */}
  .react-datepicker__header {
    ${tw`pt-9 bg-chevyTeal-light bg-opacity-50 border-b border-chevyBlue-dark border-opacity-10`};
  }

  ${'' /* Navigation arrows */}
  .react-datepicker__navigation-icon::before, .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow {
    ${tw`border-chevyBlue-dark border-opacity-50 transition duration-500 ease-in-out`}
  }

  ${'' /* Navigation arrows on hover */}
  .react-datepicker__navigation:hover ::before{
    ${tw`border-chevyTeal border-opacity-70`}
  }
  
  ${'' /* All calendar text excluding 'current month' heading */}
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__today-button {
    font-family: Ilisarniq, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    ${tw`text-chevyBlue-dark`};
  }

  ${'' /* Selected Day */}
  .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected,
  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {
    ${tw`text-white! bg-chevyBlue hover:bg-chevyTeal transition duration-500 ease-in-out`};
  }

  ${'' /* Calendar footer today button */}
  .react-datepicker__today-button {
    ${tw`border-0 py-3 text-white bg-chevyTeal hover:bg-chevyBlue transition duration-500 ease-in-out`};
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
