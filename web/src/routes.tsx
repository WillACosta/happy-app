import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/landing";
import OrphanagesMap from "./pages/orphanagesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
}

/* 'exact' define que a rota raiz deve ser renderizada exatamente como é
    'Switch' define que uma rota por vez será renderizada
*/
export default Routes;
