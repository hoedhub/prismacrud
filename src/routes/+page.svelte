<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	export let data: PageData;

	$: ({ articles } = data);
</script>

<div class="grid p-2">
	<div>
		<h2>Articles</h2>
		{#each articles as article}
			<article class="card m-2 p-4">
				<header class="card-header">{article.title}</header>
				<p>
					{article.content}
				</p>
				<form action="?/deleteArticle&id={article.id}" method="POST">
					<button type="submit" class="btn outline btn-error">Delete Article</button>
				</form>
				<button class="btn btn-warning" on:click={() => goto(`/${article.id}`)}
					>Update Article</button
				>
			</article>
		{/each}
	</div>
	<form action="?/createArticle" method="POST" class="card m-2 p-4">
		<h3 class="card-header">New Article</h3>
		<label for="title">Title</label>
		<input type="text" id="title" name="title" class="input" />
		<label for="content">Content</label>
		<textarea id="content" name="content" class="textarea" />
		<button type="submit" class="btn btn-success">Add Article</button>
	</form>
</div>
