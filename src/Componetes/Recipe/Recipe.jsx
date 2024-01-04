import { useState } from 'react';
import toast from 'react-hot-toast';

const Recipe = ({ recipe }) => {
    const [Favorite, setFavorite] = useState(false);
    const { recipePhoto, instructions, recipeName } = recipe;
    console.log(recipe);

    // Toast 
    const success = (success) => toast.success(success);
    // Make Favorite Btn
    const makeFavorite = () => {
        success('Make Favorite Added')
        setFavorite(true)
    }
    return (
        <div className="card h-[30rem] xl:h-[30rem] lg:h-[100%] p-3 shadow-xl">
            <figure className='w-full h-full'><img className='w-full h-full' src={recipePhoto} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {recipeName}</h2>
                <div>
                    <p className='block lg:hidden'>{instructions.slice(0, 60)}</p>
                    <p className='hidden lg:block'>{instructions}</p>
                </div>
                <div className="card-actions justify-end">
                    <button disabled={Favorite} onClick={makeFavorite} className="btn mx-auto mt-4 btn-primary text-white">Make Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;