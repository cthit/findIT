import { useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/elements/Header'
import LightBox from '../components/elements/LightBox'
import { Category } from '../data/category'
import data from '../data/service.json'

const Home: NextPage = () => {
	const categories: Category[] = data
	const [show, setShow] = useState(false)
	return (
		<>
			<Head>
				<title>FindIT</title>
				<meta
					name='description'
					content='Site for finding different online services for the IT-division at Chalmers'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Header categories={categories} show={show} setShow={setShow} />
				<LightBox categories={categories} show={show} setShow={setShow} />
			</main>
		</>
	)
}

export default Home
