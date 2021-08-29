import React from 'react';
import tw, { styled } from 'twin.macro';

// Components
import ButtonSpinner from '../components/ButtonSpinner';
import SingleAlert from '../components/SingleAlert';

// Icons
import Logo from '../icons/LogoSmall';

// Context
import { AuthContext } from '../context/authContext';

// Hooks
import useAuth from '../hooks/useAuth';

const StyledLoginPageWrapper = tw.div`min-w-full min-h-screen bg-gradient-to-b from-chevyTeal to-chevyBlue flex items-center justify-center flex-shrink-0	`;
const StyledLoginFormHeadingWrapper = tw.div`mb-7 flex justify-between`;
const StyledLoginPageHeading = tw.h1`text-left text-3xl tracking-tighter `;

const StyledLoginForm = styled.form`
  ${tw`max-w-sm p-10 mx-10 text-center bg-white rounded-lg md:w-full`};

  width: 500px;
`;

const StyledInputWrapper = tw.div`max-w-sm m-auto mb-7`;
const StyledInputLabel = tw.label`font-semibold text-sm mb-2 block text-left`;
const StyledInput = tw.input`w-full max-w-sm px-4 pt-2 pb-2.5 border border-chevyBlue-dark border-opacity-10 rounded focus:outline-none focus:ring-4 focus:ring-chevyTeal-light focus:border-chevyTeal transition duration-500 ease-in-out placeholder-chevyBlue-dark placeholder-opacity-40`;
const StyledLoginButton = tw.button`w-full max-w-sm my-4 px-4 py-2.5 rounded bg-chevyTeal hover:bg-chevyBlue text-white transition duration-500 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-200 `;

function Login() {
  const { setToken, loginErrorMessage, setLoginErrorMessage } =
    React.useContext(AuthContext);
  const mutation = useAuth();
  const { data, isError, isLoading, reset } = mutation;

  function setLocalStorageItem(itemName, itemData) {
    window.localStorage.setItem(itemName, JSON.stringify(itemData));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { userId, passcode } = event.target.elements;

    mutation.mutate({
      login: userId.value,
      passwordHash: passcode.value,
    });
  }

  setToken(data?.token);
  setLocalStorageItem('loggedCEMCSUserToken', data?.token);
  setLocalStorageItem('loggedCEMCSUserName', data?.name);

  const isErrorAlertDisplayed = isError || Boolean(loginErrorMessage);

  return (
    <>
      {isErrorAlertDisplayed && (
        <SingleAlert
          variant="error"
          message={isError ? 'Unknown Email or Password' : loginErrorMessage}
        />
      )}

      <StyledLoginPageWrapper tw="py-10">
        <StyledLoginForm onSubmit={handleSubmit}>
          <StyledLoginFormHeadingWrapper>
            <StyledLoginPageHeading>Log in</StyledLoginPageHeading>
            <Logo />
          </StyledLoginFormHeadingWrapper>

          <StyledInputWrapper>
            <StyledInputLabel htmlFor="user-id">User ID</StyledInputLabel>
            <StyledInput
              type="text"
              name="userId"
              id="user-id"
              onChange={() => {
                reset();
                setLoginErrorMessage('');
              }}
            />
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledInputLabel htmlFor="passcode">Passcode</StyledInputLabel>
            <StyledInput
              type="password"
              name="passcode"
              id="passcode"
              onChange={() => {
                reset();
                setLoginErrorMessage('');
              }}
            />
          </StyledInputWrapper>

          <StyledLoginButton>
            <span>{!isLoading && 'Login'}</span>
            <span>{isLoading && <ButtonSpinner />}</span>
          </StyledLoginButton>

          <div>
            <a
              href="https://cemcscoop.com"
              tw="max-w-xs rounded block px-2.5 pt-2 pb-2.5 transition duration-500 ease-in-out bg-transparent hover:bg-chevyTeal hover:bg-opacity-10 text-chevyTeal"
            >
              Return home
            </a>
          </div>
        </StyledLoginForm>
      </StyledLoginPageWrapper>
    </>
  );
}

export default Login;
