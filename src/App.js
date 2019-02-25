import React from 'react';

import Layout from './components/Layout/Layout';
import CandidateList from './components/CandidateList';

// This would normally be your router and any initialization for the app.
// For this small demo we'll simply render the main component with a layout
const App = () => (
  <Layout>
    <CandidateList />
  </Layout>
);

export default App;
