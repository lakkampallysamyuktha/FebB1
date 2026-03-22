import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useCallback } from "react";

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

// Context
import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const isAuth = !!localStorage.getItem("user"); // ✅ IMPORTANT

  return (
    
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>


          {/* Navbar only if logged in */}
          {isAuth && <Navbar setSearch={handleSearch} />}

          <Routes>

            {/* LOGIN */}
            <Route path="/login" element={<Login />} />

            {/* PROTECTED ROUTES */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home search={search} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/men"
              element={
                <ProtectedRoute>
                  <Men />
                </ProtectedRoute>
              }
            />

            <Route
              path="/women"
              element={
                <ProtectedRoute>
                  <Women />
                </ProtectedRoute>
              }
            />

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />

            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />

            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />

            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <Services />
                </ProtectedRoute>
              }
            />

            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />

            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />

            <Route
              path="/success"
              element={
                <ProtectedRoute>
                  <Success />
                </ProtectedRoute>
              }
            />

          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
// import React, { useState } from "react";
// import "./Router/style.css";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Home from "./Router/Home";
// import About from "./Router/About";
// import Services from "./Router/Services";
// import WebDev from "./Router/WebDev";
// import AppDev from "./Router/AppDev";
// import UIUX from "./Router/UIUX";
// import Contact from "./Router/Contact";
// import Profile from "./Router/Profile";
// import Settings from "./Router/Settings";
// import UserList from "./useparmsusestate/UserList";
// import UserDetails from "./useparmsusestate/UserDetails";
// import CRUD from "./components/CRUD";
// // import "./useparmsusestate/user.css";
// // import AddTodo from "./Todolist/AddTodo";
// // import TodoTable from "./Todolist/TodoTable";
// // import "./Todolist/style.css";


// export default function App() { 
//    const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//   };

//   const deleteTask = (index) => {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
//   };
  
//    return (
//     <CRUD/>
    //   <div className="container">

    //   <h1>Todo List</h1>

    //   <AddTodo addTask={addTask} />

    //   <TodoTable tasks={tasks} deleteTask={deleteTask} />

    // </div>
  //       <BrowserRouter>
  //     <Routes>

  //       <Route path="/" element={<UserList />} />
  //       <Route path="/user/:id" element={<UserDetails />} />

  //     </Routes>
  //   </BrowserRouter>

//     <BrowserRouter>
//     <div className="header">
//   <Link to="/home">Home</Link>
//   <Link to="/about">About</Link>
//   <Link to="/services">Services</Link>
//   <Link to="/contact">Contact</Link>
//   <Link to="/profile">Profile</Link>
//   <Link to="/settings">Settings</Link>
// </div>

// <Routes>

//   <Route path="/home" element={<Home />} />
//   <Route path="/about" element={<About />} />

//   <Route path="/services" element={<Services />}>
//     <Route path="web" element={<WebDev />} />
//     <Route path="app" element={<AppDev />} />
//     <Route path="uiux" element={<UIUX />} />
//   </Route>

//   <Route path="/contact" element={<Contact />} />
//   <Route path="/profile" element={<Profile />} />
//   <Route path="/settings" element={<Settings />} />

// </Routes>

//     </BrowserRouter>
//   );
// }
