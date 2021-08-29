import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

// Pages
import SingleFormPage from '../pages/SingleFormPage';
import NotFound from '../pages/NotFound';

// Components
import SideNav from '../components/SideNav';
import FullPageSpinner from '../components/FullPageSpinner';
import SingleAlert from '../components/SingleAlert';

// Custom Hooks
import useFormPages from '../hooks/useFormPages';
import useLogOut from '../hooks/useLogOut';

// Styles
const AppContainer = tw.div`md:flex text-sm`;
const SideNavContainer = styled.div`
  ${tw`md:h-screen md:overflow-auto md:w-1/4 md:bg-chevyTeal-light md:bg-opacity-50`}

  min-width: 280px;
`;
const SideMainContentContainer = tw.div`md:h-screen md:overflow-auto md:w-full bg-chevyTeal-light bg-opacity-30 min-h-screen`;

function AuthenticatedApp() {
  const [firstPageUrl, setFirstPageUrl] = React.useState('');
  const { isLoading, error, isError, data } = useFormPages();

  const sessionExpiredLogOut = useLogOut(
    'Session expired. Please log in again'
  );

  // Log users out when unauthenticated requests fail / token expires
  if (error?.response?.status === 401) {
    sessionExpiredLogOut();
  }

  const formPagesData = data?.formPages;

  React.useEffect(() => {
    Boolean(formPagesData) && setFirstPageUrl(formPagesData[0].url);
  }, [formPagesData]);

  const formPages = formPagesData?.map(({ url, name, data, id }) => (
    <Route path={url} key={id}>
      <SingleFormPage name={name} data={data} />
    </Route>
  ));

  if (isLoading) {
    return <FullPageSpinner />;
  }

  if (isError) {
    return (
      <SingleAlert
        variant="error"
        message="There was an error loading the data required for this page"
      />
    );
  }

  return (
    <AppContainer>
      <SideNavContainer>
        <SideNav formPagesData={formPagesData} />
      </SideNavContainer>

      <SideMainContentContainer>
        <Switch>
          {formPages}

          <Route path="/">
            <Redirect to={firstPageUrl} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Switch>
      </SideMainContentContainer>
    </AppContainer>
  );
}

export default AuthenticatedApp;
