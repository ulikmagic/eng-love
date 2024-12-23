import React from 'react'
import GirlImage from '../../assets/img/girl.png'
import LoveImage from '../../assets/img/love.png'
import HartIcon from '../../assets/icons/hart.svg?react'

export const Welcome = ({ next = () => {} }) => {
	return (
		<div className='w-full h-full z-1 flex items-center justify-center py-[20px] px-[30px]'>
			<div className='w-full max-w-[500px] min-h-[400px] bg-white rounded-2xl shadow-2xl p-2 text-center'>
				<h1 className='text-3xl font-main font-semibold text-center mt-[20px]'>
					Зови меня Улик (Улугбек)
				</h1>
				<p className='font-main text-2xl'>
					Я программист и создал этот сайт специально <br /> для тебя{' '}
					<span onClick={next} className='cursor-pointer'>
						<HartIcon className='inline-block w-5 h-5' />
					</span>{' '}
				</p>
				<div className='flex items-center justify-center gap-2 flex-wrap'>
					<img src={GirlImage} alt='girl' className='w-[150px] h-[200px]' />
					<img src={LoveImage} alt='girl' className='w-[150px] h-[200px]' />
				</div>
				<div className='mt-3 text-center'>
					<p className='font-bold font-main text-xl'>Нажми на сердечко :O</p>
				</div>
			</div>
		</div>
	)
}
