import React from 'react';
import tw from 'twin.macro';
import { Spinner } from '@chakra-ui/spinner';

// Styles
const StyledSpinner = tw(Spinner)`w-4 h-4 ml-2.5 pt-2 block`;

function ButtonSpinner() {
  return <StyledSpinner />;
}

export default ButtonSpinner;
