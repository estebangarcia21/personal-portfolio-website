<script lang="ts">
	import Container from './Container.svelte';
	import profile from '$lib/images/profile.jpg';
	import linkedin from '$lib/images/logos/linkedin.png';
	import github from '$lib/images/logos/github.svg';
	import latestResume from '$lib/resumes/latest.pdf';
	import Project from './Project.svelte';
	import Section from './Section.svelte';
	import SectionTitle from './SectionTitle.svelte';
	import { validate_component } from 'svelte/internal';
</script>

<svelte:head>
	<title>Esteban Garcia</title>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<Container classname="text-softwhite py-8">
	<nav>
		<div class="flex flex-row justify-between items-center">
			<ul class="socials flex flex-row justify-between space-x-4 items-center">
				<li>
					<a
						href="https://www.linkedin.com/in/esteban-garcia-ba43301b5/"
						target="_blank"
						rel="noreferrer"
					>
						<img alt="LinkedIn logo" src={linkedin} />
					</a>
				</li>
				<li>
					<a href="https://github.com/estebangarcia21" target="_blank" rel="noreferrer">
						<img alt="Github logo" src={github} class="color" />
					</a>
				</li>
				<li class="flex content-center flex-wrap">
					<a
						href={latestResume}
						target="_blank"
						rel="noreferrer"
						class="px-8 border border-blue-600 rounded-sm py-2 font-semibold lowercase transition hover:bg-blue-600"
					>
						Resume
					</a>
				</li>
			</ul>
		</div>
	</nav>

	<h1 class="text-4xl font-semibold my-8 md:my-16">
		hello, i{"'"}m <span class="text-emerald-400">esteban</span>
	</h1>

	<section class="mb-8 md:mb-12">
		<SectionTitle value="aboutMe" />

		<div class="md:flex md:flex-row">
			<div class="mt-8 md:mt-0 md:mr-8">
				<p>
					I am a professional developer who is passionate about Computer Science. I love working on
					personal projects and collaborating with other developers to build technology that solves
					real-world problems. I have been professionally programming for around a year, programming
					as a hobby for 8 years, and never miss a chance to learn new technologies and improve the
					world through Computer Science!
				</p>

				<p class="mt-4">
					I also love to listen to and create music on my free time. I enjoy getting together with
					my friends on the weekend to work on personal projects too!
				</p>
			</div>

			<div>
				<img
					src={profile}
					alt="Esteban Garcia"
					class="hidden md:block mx-auto max-w-[200px] rounded-md rotate-3"
				/>
			</div>
		</div>
	</section>

	<section class="my-8 md:mb-12">
		<SectionTitle value="experience" />

		<p>
			Please take a look at my <span>
				<a
					href="https://www.linkedin.com/in/esteban-garcia-ba43301b5/"
					class=""
					target="_blank"
					rel="noreferrer">LinkedIn profile</a
				>
			</span> to see my experiences.
		</p>
	</section>

	<section>
		<SectionTitle value="personalProjects" />

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
			<Project
				title="PEX Website"
				href="https://github.com/estebangarcia21/tbhs-pit-exchange-website"
				externalViewHref="https://tbhs-pit-exchange-website-im-stevemmmmm.vercel.app/"
				skills={['Next.js', 'React.js', 'GraphQL']}
			>
				A concept trading website for a popular game made using NextJS and GraphQL.
			</Project>
			<Project
				title="SWE Club Website"
				href="https://github.com/estebangarcia21/software-developers-club"
				externalViewHref="https://www.franklinsoftwaredevelopers.com/"
				skills={['Next.js', 'React.js', 'ChakraUI', 'SCSS']}
				>The official and public website for the Franklin Full Stack Developers Club.</Project
			>
			<Project
				title="SWE Website Concept"
				href="https://github.com/estebangarcia21/fullstack-developers-website"
				externalViewHref="https://fullstack-developers-website.vercel.app/"
				skills={['Next.js', 'NodeJS']}
				>The concept website used to create the Franklin Full Stack Developers Club.</Project
			>
			<Project
				title="Subprocess"
				href="https://github.com/estebangarcia21/subprocess"
				skills={['Go', 'Makefile', 'Github Actions']}
			>
				A package for running subprocesses in Go, similar to Python's subprocesses package.
			</Project>
			<Project
				title="The Blue Hats Server"
				href="https://github.com/estebangarcia21/the-blue-hats-server"
				skills={['Kotlin', 'Kotest', 'Docker']}
			>
				A game server written in Kotlin that had an average of 50 players online at a time.
			</Project>
			<Project
				title="The Blue Hats Server Old"
				href="https://github.com/estebangarcia21/the-blue-hats-server-old"
				skills={['Java', 'TravisCI', 'JUnit']}
				>Game server written in Java. Rewritten for better code organization in Kotlin.
			</Project>
			<Project
				title="Markdown List Reader"
				href="https://github.com/estebangarcia21/markdown-list-reader"
				skills={['Python', 'unittest']}
				>A simple tool for reading lists in markdown.
			</Project>
			<Project
				title="Genesis"
				href="https://github.com/estebangarcia21/genesis"
				skills={['Typescript', 'Rust', 'Go']}
				active
				>API generation tool from specs such as a GraphQL schema.
			</Project>
			<Project
				title="FHS Website"
				active
				href="https://github.com/estebangarcia21/egusd-frhs-csfhs"
				skills={['NextJS', 'Ruby on Rails', 'ChakraUI', 'Jest']}
			>
				A website for the computer science department of the high school I attended.
			</Project>
		</div>
	</section>
</Container>

<style>
	.socials li {
		height: min-content;
	}
	.socials img {
		height: 40px;
	}

	p {
		line-height: 2;
		word-spacing: 0.2rem;
	}
</style>
