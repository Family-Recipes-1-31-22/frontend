// hello first name
//links to add recipe
//
import React, { useState, usEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { connect } from "react-redux";
import RecipeListings from "../HomePage/RecipeListings";
import Search from "../Search/Search";
import { getRecipes } from "../actions";

// function Details(props) {
//   const { recipe } = props;
//   const [filter, setFilter] = useState("");
//   const searchText = (event) => {
//     setFilter(event.target.value);
//   }}

function Details(props) {
  const isloggedIn = localStorage.getItem("token");

  const { recipe, dispatch } = props;

  const handleSubmit = () => {};
  return (
    <HeaderStyle>
      {/* <Search filter={filter} /> */}
      <Link className="link" to="/recipelisting">
        <h1>Family Secret Recipes</h1>
      </Link>
      <NavBar>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/signup">
          Sign Up
        </Link>

        {isloggedIn && (
          <Link className="link" to="/logout">
            Logout
          </Link>
        )}
        {isloggedIn && (
          <Link className="link" to="/addrecipe">
            Add Your Own Recipe
          </Link>
        )}
      </NavBar>
    </HeaderStyle>
  );
}
const mapState = (state) => {
  return {
    recipe: state.recipe,
  };
};

export default connect(mapState)(Details);

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h1 {
    margin-left: 20px;
    @media (max-width: 420px) {
      font-size: 1.3rem;
    }
  }
  background-color: #db7c26;
  opacity: 0.8;
  position: fixed;
  font-family: "Lobster";
  box-shadow: 10px 5px 10px grey;

  .link {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 370px) {
  }
`;
const NavBar = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  font-size: 1.5rem;
  .link {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    width: 80%;
    .link {
      margin-right: 10px;
    }
  }
`;
const SearchBar = styled.div`
  display: flex;
  border: 2px solid black;
  background-color: #fffae5;
  padding: 5px;
  border-radius: 5px;
  input {
    background-color: #fffae5;
    border: none;
  }
  button {
    background-color: #fffae5;
    border: none;
  }
  button:hover {
    border: 1px solid black;
  }
`;
