import './App.scss'
import Comment from './components/Comment'
import CommentBox from './components/CommentBox'
import data from './data.json'

function App() {
	return (
		<div className='container'>
			{data.comments.map((comment, id) => {
				return <Comment key={id} {...comment} />
			})}
			<CommentBox {...data.currentUser} />
		</div>
	)
}

export default App
