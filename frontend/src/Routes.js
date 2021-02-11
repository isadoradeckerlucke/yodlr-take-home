import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";

function Routes() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getItems() {
      // let drinks = await SnackOrBoozeApi.get("drinks");
      // let snacks = await SnackOrBoozeApi.get("snacks");
      // setDrinks(drinks);
      // setSnacks(snacks);
      setIsLoading(false);
    }
    getItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Admin users={users} />
            </Route>
            <Route path="/users/:id">
              <Item users={users} />
            </Route>
            {/* <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" itemType="Snack" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" itemType="Drink" />
            </Route>
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/all-items">
              <FullMenu snackItems={snacks} drinkItems={drinks} />
            </Route>
            <Route exact path="/all-items/new">
              <NewItemForm addItem={handleAdd} />
            </Route> */}
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
