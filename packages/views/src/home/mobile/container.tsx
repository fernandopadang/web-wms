import React from 'react';
import Router from 'next/router';

export default function Container() {
  return(
    <React.Fragment>
      <h1>Home Mobile</h1>
      <button onClick={() => Router.push("/category")}>Category</button>
    </React.Fragment>
  );
}