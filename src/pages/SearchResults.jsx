import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import RecipeList from '../components/RecipeList'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

function SearchResults() {
	const navigate = useNavigate()
	const location = useLocation()
	const searchTerm = location.search
	const queryParams = new URLSearchParams(searchTerm)
	const query = queryParams.get('q')
	const {
		data: recipes,
		loading,
		error,
	} = useFetch('http://localhost:3000/recipes?q=' + query)

	useEffect(() => {
		if (recipes && recipes.length === 0) {
			toast.error('No recipes to show')
			navigate('/')
		}
	}, [recipes, navigate])

	return (
		<div className='home search'>
			{loading && <div className='loading'>Loading...</div>}
			{error && <div className='error'>{error}</div>}

			{recipes && recipes !== [] && (
				<>
					<p className='text-center search-title'>
						Recipes including word "{query}"
					</p>
					<RecipeList recipes={recipes} />
				</>
			)}
		</div>
	)
}
export default SearchResults
