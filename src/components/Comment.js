import React from 'react'
import ProfileImage from '../assets/images/avatars/image-amyrobson.png'
import IconPlus from '../assets/images/icon-plus.svg'
import IconMinus from '../assets/images/icon-minus.svg'
import IconReply from '../assets/images/icon-reply.svg'

const Comment = () => {
	return (
		<div className='comment-container'>
			<div className='vote'>
				<div className='icon-small plus'>
					<img src={IconPlus} />
				</div>
				<div className='count'>10</div>
				<div className='icon-small minus'>
					<img src={IconMinus} />
				</div>
			</div>
			<div className='comment-main'>
				<div className='comment-meta'>
					<img className='comment-image' src={ProfileImage} alt='' />
					<p className='comment-name'>Name</p>
					<p className='comment-date'>1 week ago</p>
					<p className='comment-reply'>
						<img src={IconReply} />
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
