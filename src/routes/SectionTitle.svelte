<script lang="ts">
	export let value: string;
</script>

<p class="prefix mb-2">{'$ cat'}</p>
<div class="section">
	<div>
		<p>{value}.txt</p>
	</div>
	<hr />
</div>

<style>
	.prefix {
		@apply text-coolGray-200 text-2xl font-semibold font-mono;
	}
	.section {
		@apply flex flex-row items-center flex-wrap mb-6;
	}

	.section p {
		@apply font-mono font-semibold text-2xl pr-4;
	}

	.section hr {
		all: unset;
		height: 0.05px;
		background-color: rgb(224, 224, 224);
		display: inline-block;
		flex: 1;
	}
</style>
