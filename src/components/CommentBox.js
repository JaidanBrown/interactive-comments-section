import React from 'react'

const CommentBox = (currentUser) => {
	return (
		<div className='commentbox-container'>
			<div className='commentbox-image'>
				<img src={`./assets/${currentUser.image.png}`} />
			</div>
			<div className='commentbox-comment'>
				<textarea rows='3' placeholder='Add a comment...'></textarea>
			</div>
			<div className='commentbox-button'>
				<button>SEND</button>
			</div>
		</div>
	)
}

export default CommentBox
