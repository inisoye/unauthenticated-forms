import React from 'react';
import { styled } from 'twin.macro';
import { Spinner } from '@chakra-ui/spinner';

const StyledSpinner = styled(Spinner)`
  width: 2rem;
  height: 2rem;
`;

function SpinnerComponent() {
  return (
    <div
      style={{
        minHeight: '50vh',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StyledSpinner />{' '}
    </div>
  );
}

export default SpinnerComponent;
