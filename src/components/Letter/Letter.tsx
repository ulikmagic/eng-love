import clsx from 'clsx'
import React, { useState } from 'react'
import StarIcon from '../../assets/icons/star.svg?react'
import './Letter.css'

const Letter = ({ next = () => {} }) => {
	const [open, setOpen] = useState(false)
	return (
		<div className='wrapper' onClick={() => setOpen(!open)}>
			<div className={clsx('envelope-wrapper', open && 'flap')}>
				<div className='envelope'>
					<div className='letter'>
						<div className='text'>
							<strong className='font-main text-base flex items-center gap-1 font-bold'>
								Привет lovvelyeon
								<span className='cursor-pointer' onClick={next}>
									<StarIcon className='w-4 h-4' />
								</span>
							</strong>
							<p className='font-main text-sm'>
								Ты мне понравилась. Я хочу с тобой познакомиться!
							</p>
							<div className='about'>
								<p className='font-main text-sm'>Нажми на звезду :D</p>
							</div>
						</div>
					</div>
				</div>
				<div className='heart'></div>
			</div>
		</div>
	)
}

export default Letter
