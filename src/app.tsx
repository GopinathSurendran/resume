import classes from './app.module.scss';
import Layout from './containers/layout/layout';
import Home from './containers/home/home';

function App() {

  return (
    <div className={classes.app}>
      <Layout />
      <div className={classes.container}>
        <Home />
      </div>
    </div>
  )
}

export default App
