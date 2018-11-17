import * as React from 'react';
import Layout from './components/Layout/Layout';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Layout>
          <p>Burger builder in the haus</p>
        </Layout>
      </div>
    );
  }
}

export default App;
