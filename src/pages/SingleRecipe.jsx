import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'
import Card from 'react-bootstrap/Card'
import { useTheme } from '../hooks/useTheme'
import ButtonBox from '../components/ButtonBox'

function SingleRecipe() {
	const { color } = useTheme()
	const params = useParams()
	const {
		data: recipe,
		loading,
		error,
		deleteData,
	} = useFetch('http://localhost:3000/recipes/' + params.id)

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
							<Card.Title
								style={{ color: color, boxShadow: ` 0 8px 6px -6px ${color}` }}
							>
								{recipe.title}
							</Card.Title>
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
										<li key={ing}>{ing}</li>
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

							<ButtonBox
								width='70%'
								btn='6'
								del='2'
								link='/'
								text='Go back'
								color={color}
								deleteData={deleteData}
								recipe={recipe}
							/>
						</Card.Body>
					</Card>
				)
			)}
		</article>
	)
}
export default SingleRecipe
