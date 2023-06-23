import { useNavigate } from 'react-router'
import RecipeList from '../components/RecipeList'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

function Home() {
	const navigate = useNavigate()
	const {
		data: recipes,
		loading,
		error,
		deleteData,
	} = useFetch('http://localhost:3000/recipes')

	useEffect(() => {
		if (recipes) {
			navigate('/')
		}
	}, [recipes, navigate])
	return (
		<div className='home'>
			{loading ? (
				<div className='loading'>Loading...</div>
			) : error ? (
				<div className='error'>{error}</div>
			) : (
				recipes &&
				recipes !== [] && (
					<RecipeList recipes={recipes} deleteData={deleteData} />
				)
			)}
		</div>
	)
}
export default Home
