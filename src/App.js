import { Container } from "react-bootstrap";
import "./App.css";
import Category from "./components/Category";
import Header from "./components/Header";
import ItemsLis from "./components/ItemsLis";
import NavBar from "./components/NavBar";

import { items } from "./data";
import { useState } from "react";
function App() {
  const [itemsData, setItemsData] = useState(items);

  const allCategory = ["الكل",...new Set(items.map((i) => i.category))];
  console.log(allCategory);

  // filter by category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };



    // filter by search form 
    const filterbySearch = (word) => {
      if (word !== "") {
        const newArr = items.filter((item) => item.title === word)
        setItemsData(newArr)
      }
    }
    
  return (
    <div className="color-body">
      <NavBar filterbySearch={filterbySearch}/>
      <Container>
        <Header />
        <Category
          filterbyCategory={filterByCategory}
          allCategory={allCategory}
        />
        <ItemsLis itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
