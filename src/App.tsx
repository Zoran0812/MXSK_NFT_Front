import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./Routes";
import Web3WalletProvider from "wallets/wallet";
import Web3ContractsProvider from "web3/contracts";

import Home from "./views/Home";
import About from "./views/About";
import Events from "./views/EventsPage";
import HuntingClub from "./views/HuntingClub";
import Masks from "./views/Masks";
import Minting from "./views/Minting";
import PhysicalMasks from "./views/PhysicalMasks";
import Roadmap from "./views/Roadmap";
import Error from "./views/Error";

import Loading from "./components/Loading";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bundle.css";
import 'jquery/src/jquery';

function App(props: any) {
  const { loading } = props;

  return (
    <Web3WalletProvider>
      <Web3ContractsProvider>
        <Router>
          <Switch>
            <PublicRoute path="/" exact component={Home} />
            <PublicRoute path="/about" exact component={About} />
            <PublicRoute path="/events" exact component={Events} />
            <PublicRoute path="/hunting-club" exact component={HuntingClub} />
            <PublicRoute path="/masks" exact component={Masks} />
            <PublicRoute path="/minting" exact component={Minting} />
            <PublicRoute path="/physical-masks" exact component={PhysicalMasks} />
            <PublicRoute path="/roadmap" exact component={Roadmap} />
            <PublicRoute path="*" component={Error} />
          </Switch>
        </Router>
        <Loading loading={loading} />
      </Web3ContractsProvider>
    </Web3WalletProvider>
  );
}

export default App;
