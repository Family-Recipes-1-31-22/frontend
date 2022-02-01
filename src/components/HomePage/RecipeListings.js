import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setEditing } from "../actions";
import EditRecipeForm from "../forms/EditRecipeForm";

function RecipeListings(props) {
  const { recipe, setEditing, editing } = props;
  console.log(recipe);

  const handleEditSelect = () => {
    setEditing();
  };

  return (
    <RecipeList>
      <Container>
        {recipe.map((recipe) => {
          return (
            <RecipeItem key={recipe.title}>
              <h2>{recipe.title}</h2>
              <p>
                <strong>Source:</strong> {recipe.source}
              </p>
              <h4>
                <strong>Ingrediants: {recipe.ingrediants}</strong>
              </h4>
              <h4>
                <strong>Instructions: {recipe.instructions}</strong>
              </h4>
              <h4>
                <strong>Category: {recipe.category}</strong>
              </h4>
              <button onClick={handleEditSelect}>Edit</button>
            </RecipeItem>
          );
        })}
      </Container>

      {editing && <EditRecipeForm />}
    </RecipeList>
  );
}
const mapStateToProps = (state) => {
  return {
    recipe: state.recipe,
    editing: state.editing,
  };
};
export default connect(mapStateToProps, { setEditing })(RecipeListings);

const RecipeList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
const RecipeItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  margin-top: 50px;
  border: 4px solid #780116;
  border-radius: 5px;
  padding: 30px;
  background-color: #fffae5;
  margin-bottom: 20px;
  button {
    width: 20%;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  }
  button:hover {
    background-color: #fff2b2;
    border: 3px solid palevioletred;
  }
  :hover {
    box-shadow: 10px 5px 5px #db7c26;
  }
  font-family: oxygen;
  font-size: 1.5rem;
`;

const Container = styled.div`
  margin-top: 80px;
`;
