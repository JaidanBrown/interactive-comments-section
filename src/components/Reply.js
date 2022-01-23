import React from 'react'
import IconPlus from '../img/icon-plus.svg'
import IconMinus from '../img/icon-minus.svg'
import IconReply from '../img/icon-reply.svg'

const Reply = (reply) => {
	return (
		<div className='comment-container reply-container'>
			<div className='vote'>
				<div className='icon-small plus'>
					<img src={IconPlus} />
				</div>
				<div className='count'>{reply.score}</div>
				<div className='icon-small minus'>
					<img src={IconMinus} />
				</div>
			</div>
			<div className='comment-main'>
				<div className='comment-meta'>
					<img
						className='comment-image'
						src={`./assets/${reply.user.image.png}`}
						alt=''
					/>
					<p className='comment-name'>{reply.user.username}</p>
					<p className='comment-date'>{reply.createdAt}</p>
					<p className='comment-reply'>
						<img src={IconReply} />
						Reply
					</p>
				</div>
				<div className='comment-content'>
					<p>{reply.content}</p>
				</div>
			</div>
		</div>
	)
}

export default Reply
