import { useState } from 'react';
import toast from 'react-hot-toast';
import Recipe from '../Recipe/Recipe';

const Chef_Recipe = ({ chef }) => {
    const [Favorite, setFavorite] = useState(false);
    const { chefName, picture, yearsOfExperience, likes, numberOfRecipes, recipes } = chef;

    // Toast 
    const success = (success) => toast.success(success);
    // Make Favorite Btn
    const makeFavorite = () => {
        success('Make Favorite Added')
        setFavorite(true)
    }
    return (
        <div className="bg-slate-200 text-base-200 font-medium rounded-md p-5 grid grid-cols-1 lg:grid-cols-3 justify-between md:gap-10">
            <div className="card w-full p-3 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {chefName}</h2>
                    <h6>YearsOfExperience: {yearsOfExperience}</h6>
                    <h6>Likes: {likes}</h6>
                    <h6>NumberOfRecipes: {numberOfRecipes}</h6>
                    <div className="card-actions justify-end">
                        <button disabled={Favorite} onClick={makeFavorite} className="btn mx-auto mt-4 btn-primary text-white">Make Favorite</button>
                    </div>
                </div>
            </div>
            <div className='grid col-span-2 gap-5 md:grid-cols-3 items-center'>
                {
                    recipes.map(recipe => <Recipe key={recipe.recipeId} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Chef_Recipe;