import React from 'react'
import { FaPlus, FaMinus, FaArrowCircleLeft } from 'react-icons/fa'

const Comment = () => {
	return (
		<div className='comment-container'>
			<div className='vote'>
				<div className='plus'>
					<FaPlus />
				</div>
				<div className='count'>10</div>
				<div className='minus'>
					<FaMinus />
				</div>
			</div>
			<div className='comment-main'>
				<div className='comment-meta'>
					<img src='' alt='' />
					<p className='comment-name'>Name</p>
					<p className='comment-date'>1 week ago</p>
					<p className='comment-reply'>
						<FaArrowCircleLeft />
						Reply
					</p>
				</div>
				<div className='comment-content'>
					<p>
						Impressive! Though it seems the drag feature could be improved. But
						overall it looks incredible. You've nailed the design and the
						responsiveness at various breakpoints works really well.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Comment
