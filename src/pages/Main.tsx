import React, { useState } from 'react'
import Letter from '../components/Letter/Letter'
import { Welcome } from '../components/Welcome/Welcome'
import { useSearchParams } from 'react-router-dom'
import Finish from '../components/Finish/Finish'

const Main = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const current = searchParams.get('page') || 'main'

	const setParams = value => {
		searchParams.set('page', value)
		setSearchParams(searchParams)
	}

	if (current === 'main') return <Letter next={() => setParams('welcome')} />
	if (current === 'welcome') return <Welcome next={() => setParams('finish')} />
	if (current === 'finish') return <Finish />
	return <div>конец</div>
}

export default Main
