import { Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import trash from '../assets/trash3.svg'

function ButtonBox({ color, text, link, deleteData, recipe, del, btn, width }) {
	return (
		<div className='btn-div' style={{ width: `${width ? width : ' 80%'}` }}>
			<Row>
				<Col xs={8} lg={btn ? btn : 8}>
					<Link style={{ display: 'block' }} to={link}>
						<Button variant='btn-outline-success' style={{ background: color }}>
							{text}
						</Button>
					</Link>
				</Col>
				<Col xs={4} lg={del ? del : 4}>
					<Button
						variant='btn-outline-success'
						style={{ background: color }}
						className='trash'
						onClick={() => deleteData(recipe.id)}
					>
						<img src={trash} alt='delete icon' />
					</Button>
				</Col>
			</Row>
		</div>
	)
}
export default ButtonBox
