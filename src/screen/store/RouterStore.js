import React from "react";
import { Route, Switch } from "react-router-dom";
import AllItems from "./items/AllItems";
import CreateItem from "./items/CreateItem";
import Item from "./items/Item";

const RouterStore = () => {
  return (
    <Switch>
      <Route exact path="/loja-virtual/todos-itens" component={AllItems} />
      <Route exact path="/loja-virtual/adicionar-item" component={CreateItem} />
      <Route exact path="/loja-virtual/item/:id" component={Item} />
    </Switch>
  );
};

export default RouterStore;
