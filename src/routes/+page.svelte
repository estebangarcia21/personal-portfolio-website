<script lang="ts">
	import Container from './Container.svelte';
	import profile from '$lib/images/profile.jpg';
	import linkedin from '$lib/images/logos/linkedin.png';
	import github from '$lib/images/logos/github.svg';
	import latestResume from '$lib/resumes/latest.pdf';
	import Project from './Project.svelte';
</script>

<svelte:head>
	<title>Esteban Garcia</title>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<Container classname="text-softwhite py-8">
	<nav class="mb-8">
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
						class="px-8 bg-blue-600 rounded-sm py-2 font-semibold uppercase"
					>
						Resume
					</a>
				</li>
			</ul>

			<div class="hidden sm:block">estebangarcia2121@gmail.com</div>
		</div>
	</nav>

	<h1 class="text-4xl font-semibold">Esteban Garcia</h1>
	<h2 class="text-xl mt-2 font-medium font-mono">Software Engineer | 1 Year of Experience</h2>

	<div class="md:flex md:flex-row my-12">
		<img src={profile} alt="Esteban Garcia" class="mx-auto max-w-[200px] rounded-md rotate-3" />

		<div class="mt-8 md:mt-0 md:ml-8 text-sm">
			<p>
				I am a professional developer who is passionate about Computer Science. I love working on
				personal projects and collaborating with other developers to build technology that solves
				real-world problems. I have been professionally programming for around a year, programming
				as a hobby for 8 years, and never miss a chance to learn new technologies and improve the
				world through Computer Science!
			</p>

			<p class="rounded-sm px-1 sm:text-center bg-emerald-500 font-bold text-black mt-8 uppercase">
				I am currently looking for a new role as a junior developer
			</p>

			<p class="mt-8">
				You can find a summary of my work experience on my LinkedIn profile. To see all of my
				experience including professional and volunteering experiences, please view my resume. <span
					class="rounded-sm px-1 bg-sky-500 font-bold text-black mt-8 uppercase"
					>The best way to reach me is through email or LinkedIn.</span
				>
			</p>
		</div>
	</div>

	<section>
		<div class="mb-2 sm:mb-4">
			<h1 class="text-2xl font-semibold">Personal Projects</h1>
			<p class="text-sm">
				Press on a card to go to the project Github repository. Press on VISIT to visit the website.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-2 sm:gap-8">
			<Project
				title="PEX Website"
				href="https://github.com/estebangarcia21/tbhs-pit-exchange-website"
				externalViewHref="https://tbhs-pit-exchange-website-im-stevemmmmm.vercel.app/"
			>
				A concept trading website for a popular game made using NextJS and GraphQL.
			</Project>
			<Project
				title="SWE Club Website"
				href="https://github.com/estebangarcia21/software-developers-club"
				externalViewHref="https://www.franklinsoftwaredevelopers.com/"
				>The official website for the Franklin Full Stack Developers Club.</Project
			>
			<Project title="Subprocess" href="https://github.com/estebangarcia21/subprocess">
				A package for running subprocesses in Go, similar to Python's subprocesses package.
			</Project>
			<Project
				title="The Blue Hats Server"
				href="https://github.com/estebangarcia21/the-blue-hats-server"
			>
				A game server written in Kotlin with an average of 65 players online at a time.
			</Project>
			<Project
				title="SWE Club Website Concept"
				href="https://github.com/estebangarcia21/fullstack-developers-website"
				externalViewHref="https://fullstack-developers-website.vercel.app/"
				>The concept website for the Franklin Full Stack Developers Club.</Project
			>
		</div>

		<p class="text-center italic text-coolGray-500 mt-8">And more on github...</p>
	</section>

	<section class="mt-8">
		<h1 class="text-2xl font-semibold">Contact</h1>
		<p class="text-sm">Email: estebangarcia2121@gmail.com</p>
		<p class="text-sm">
			LinkedIn: <a
				href="https://www.linkedin.com/in/esteban-garcia-ba43301b5/"
				class="cursor-pointer text-blue-600"
				rel="noreferrer"
				target="_blank">https://www.linkedin.com/in/esteban-garcia-ba43301b5/</a
			>
		</p>
	</section>
</Container>

<style>
	.socials li {
		height: min-content;
	}
	.socials img {
		height: 40px;
	}
</style>
