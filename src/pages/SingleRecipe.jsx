import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import trash from '../assets/trash3.svg'

function SingleRecipe() {
	const params = useParams()
	const {
		data: recipe,
		loading,
		error,
	} = useFetch('http://localhost:3000/recipes/' + params.id)

	const handleDelete = id => {}

	return (
		<article
			className='recipe d-flex justify-content-around'
			style={{ width: '100%' }}
		>
			{loading ? (
				<div className='loading'>Loading...</div>
			) : error ? (
				<div className='error'>{error}</div>
			) : (
				recipe && (
					<Card style={{ textAlign: 'center', width: '80%' }}>
						<Card.Body>
							<Card.Title>{recipe.title}</Card.Title>
							<p className='blockquote-footer' style={{ fontSize: '1.20em' }}>
								{recipe.cookingTime} to make
							</p>
							<Card.Subtitle className='mb-2 text-muted mx-auto w-50vw'>
								<ul
									style={{
										display: 'inline-block',
										textAlign: 'left',
										fontSize: '1.25em',
									}}
								>
									{recipe.ingredients.map(ing => (
										<li
											style={{ listStyleImage: "url('../assets/food.svg')" }}
											key={ing}
										>
											{ing}
										</li>
									))}
								</ul>
							</Card.Subtitle>
							<div className='card-text'>
								<ol style={{ textAlign: 'left' }}>
									{recipe.method.split('.').map((step, index) => (
										<li key={index}>{step}</li>
									))}
								</ol>
							</div>
							<div className='d-flex btn-div'>
								<Button variant='btn-outline-success'>
									<Link to='/'>Go back</Link>
								</Button>
								<Button
									variant='btn-outline-success'
									className='trash'
									onClick={() => handleDelete(recipe.id)}
								>
									<img src={trash} alt='delete icon' />
								</Button>
							</div>
						</Card.Body>
					</Card>
				)
			)}
		</article>
	)
}
export default SingleRecipe
