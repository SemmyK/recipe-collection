import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import trash from '../assets/trash3.svg'

function RecipeCard({ recipe, deleteData }) {
	return (
		<Card style={{ height: '100%' }}>
			<Card.Body>
				<Card.Title className='text-center '>{recipe.title}</Card.Title>
				<Card.Subtitle className='mb-2 text-muted  '>
					<ul
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'left',
						}}
					>
						{recipe.ingredients &&
							recipe.ingredients.map(ing => (
								<li
									style={{ listStyleType: 'none', marginRight: '5px' }}
									key={ing}
								>
									{ing}
								</li>
							))}
					</ul>
				</Card.Subtitle>
				<Card.Text>{recipe.method && recipe.method.slice(0, 100)}...</Card.Text>
				<p className='blockquote-footer'>{recipe.cookingTime} to make.</p>
			</Card.Body>
			<div className='d-flex flex-wrap btn-div'>
				<Button variant='btn-outline-success' className='cook'>
					<Link to={`/recipes/${recipe.id}`}>Cook this</Link>
				</Button>
				<Button
					variant='btn-outline-success'
					className='trash'
					onClick={() => {
						deleteData(recipe.id)
					}}
				>
					<img src={trash} alt='delete icon' />
				</Button>
			</div>
		</Card>
	)
}
export default RecipeCard
