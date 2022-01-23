import React from 'react'
import Reply from './Reply'
import IconPlus from '../img/icon-plus.svg'
import IconMinus from '../img/icon-minus.svg'
import IconReply from '../img/icon-reply.svg'

const Comment = (comment) => {
	return (
		<>
			<div className='comment-container'>
				<div className='vote'>
					<div className='icon-small plus'>
						<img src={IconPlus} />
					</div>
					<div className='count'>{comment.score}</div>
					<div className='icon-small minus'>
						<img src={IconMinus} />
					</div>
				</div>
				<div className='comment-main'>
					<div className='comment-meta'>
						<img
							className='comment-image'
							src={`./assets/${comment.user.image.png}`}
							alt=''
						/>
						<p className='comment-name'>{comment.user.username}</p>
						<p className='comment-date'>{comment.createdAt}</p>
						<p className='comment-reply'>
							<img src={IconReply} />
							Reply
						</p>
					</div>
					<div className='comment-content'>
						<p>{comment.content}</p>
					</div>
				</div>
			</div>
			{comment.replies.length != 0 &&
				comment.replies.map((reply, id) => {
					return <Reply key={id} {...reply} />
				})}
		</>
	)
}

export default Comment
