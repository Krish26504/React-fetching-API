import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { getPosts } from "./api";
import Products from "./components/Products";
import Recipies from "./components/Recipies";
import ProductDetail from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const ITEMS_PER_PAGE = 10;

function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getPosts().then(posts => setData(posts));
  }, []);
  const keys = data && typeof data === "object" ? Object.keys(data) : [];
  const pageCount = Math.ceil(keys.length / ITEMS_PER_PAGE);
  const currentKeys = keys.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2 className="section-title">Products</h2>
                <div className="card-container">
                  {currentKeys.length > 0
                    ? currentKeys.map((key) => {
                        const item = data[key];
                        return (
                          <Products
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            price={item.price}
                          />
                        );
                      })
                    : <p>Loading Products...</p>
                  }
                </div>
                <ReactPaginate
                  previousLabel={"← Previous"}
                  nextLabel={"Next →"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                />
                <h2 className="section-title">Recipes</h2>
                <div className="card-container">
                  {currentKeys.length > 0
                    ? currentKeys.map((key) => {
                        const item = data[key];
                        // Demo ingredients
                        const ingredients = ["Salt", "Pepper", "Oil", "Spices"].sort(() => 0.5 - Math.random()).slice(0, 3);
                        return (
                          <Recipies
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            ingredients={ingredients}
                          />
                        );
                      })
                    : <p>Loading Recipes...</p>
                  }
                </div>
                <ReactPaginate
                  previousLabel={"← Previous"}
                  nextLabel={"Next →"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                />
              </>
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetail data={data} />}
          />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
