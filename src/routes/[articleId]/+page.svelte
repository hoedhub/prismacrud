<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ article } = data);
</script>

<form action="?/updateArticle" method="POST" class="card m-2 p-4">
	<h3 class="card-header">Update Article</h3>
	<label for="title">Title</label>
	<input type="text" id="title" name="title" class="input" value={article.title} />
	<label for="content">Content</label>
	<textarea id="content" name="content" class="textarea" value={article.content} />
	<button type="submit" class="btn btn-success">Save Update</button>
</form>
