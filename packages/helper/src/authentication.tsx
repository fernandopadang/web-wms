import React, { useEffect } from 'react';
import  Router from 'next/router';

const withAuthentication = (WrappedComponent: {
  (props: any): JSX.Element;
  getInitialProps(props: {
      query: any;
      req: any;
  }): Promise<{
      toSSR: boolean;
  }>;
}) => {
  const RequiresAuthentication = (props: any) => {
     // get user role from redux state
  //  console.log(localStorage.getItem("cekiceki"));

   useEffect(() => {
     // if a there isn't a logged in user and their role has been set to "guest"
     // then redirect them to "/signin"
    // if (localStorage.getItem("cekiceki") !== "guest") Router.push("/signin");
    console.log(window)
   }, [window]);

     // if there's a loggedInUser, show the wrapped page, otherwise show a loading indicator
  //  return localStorage.getItem("cekiceki") !== "guest" ? <div>tes</div> : <div>loading...</div>;
  };

  return RequiresAuthentication;
};

export default withAuthentication;