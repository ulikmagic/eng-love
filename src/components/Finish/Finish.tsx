import React from 'react'
import CatImage from '../../assets/img/cat.png'

const Finish = () => {
	return (
		<div className='h-full w-full flex items-center justify-center'>
			<div className='w-full max-w-[500px] min-h-[400px] bg-white rounded-2xl shadow-2xl p-2'>
				<img src={CatImage} alt='cat' className='w-40 mx-auto mt-10' />
				<div className='mt-2 text-center'>
					<p className='font-main text-2xl'>
						Хочу узнать о тебе больше, давай общаться! <br />
						Пиши мне в Telegram или напиши в личку в Instagram.
					</p>
					<p className='font-main text-2xl mt-2'>Telegram: @Ulikman</p>
				</div>
			</div>
		</div>
	)
}

export default Finish
