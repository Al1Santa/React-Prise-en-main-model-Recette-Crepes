// == Import : npm

// data
import recipe from 'src/data/recipe';

// == Import : local
// Composant
import Header from '../Header';
import Ingredients from '../Ingredients';
import Steps from '../Steps';
import './styles.scss';

// console.log(recipe.title);

// == Composant
function Recipe() {
  // En JSX on est obligé d'entourer notre code JSX dans un parent
  // soit une  <div>, <main> etc 
  //  ou avec un fragment <></>
  return (
    <div className="recipe">
      <Header
        title={recipe.title}
        img={recipe.thumbnail}
        author={recipe.author}
        difficulty={recipe.difficulty}
      />
      <Ingredients ingredients={recipe.ingredients} />
      <Steps steps={recipe.instructions} />
    </div>
  );
}
// == Export
export default Recipe;
