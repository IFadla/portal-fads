<template>
  <section class="detail">
		<div v-if="!isEditing" class="detail__show">
			<div class="show-date">
				<p>Published at</p><i class="fa-solid fa-circle"></i>
				<p>{{ news.date }}</p><i class="fa-solid fa-circle"></i>
				<p>{{ news.media }}</p>
			</div>

			<h1 class="show-title">
				{{ news.title }}
			</h1>

			<img :src="news.image" class="show-image" alt="detail-image">

			<p class="show-description" v-html="news.description"></p>

			<p class="show-author">
				Author : <span>{{ news.author }}</span>
			</p>

			<button @click="editHandling()" class="show-btn-edit">Ubah</button>
		</div>

		<div v-else class="detail__edit">
			<form class="edit-form" @submit.prevent="saveEdit()">
				<div class="form-input">
					<label for="title">Judul</label>
					<input type="text" value="test" v-model="item.title">
				</div>

				<img :src="news.image" class="form-image" alt="detail-image">

				<div class="form-input form-input--url">
					<label for="title">Gambar URL</label>
					<input type="text" value="test" v-model="item.image">
				</div>

				<div class="form-input form-input--url">
					<label for="title">Headline</label>
					<input type="text" value="test" v-model="item.headline">
				</div>

				<ckeditor :editor="editor" v-model="item.description" />

				<input class="show-btn-save" type="submit" value="Simpan">
				<button @click="editHandling()" class="show-btn-cancel">Batalkan</button>
			</form>
		</div>
  </section>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
	name: "Detail",
	components: {
    ckeditor: CKEditor.component,
  },
	data() {
		return {
			isEditing: false,
			editor: ClassicEditor,
			item:{
				"id": `"${this.$route.params.id}"`,
				"title": "",
				"description": "",
				"headline": "",
				"image": "",
				"author": "Naritsara Leamsavat",
				"date": "07 Februari 1993",
				"media": "Bisnis.com"
			},
			content: '',
			config: {
				toolbar: ['heading', '|', 'bold', 'italic', 'link'],
				heading: {
					options: [
						{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
						{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
						{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
					]
				}
			}
		}	
	},
	computed: {
		news() {
			const id = this.$route.params.id
			return this.$store.state.news.find(item => item.id === id)
		}
	},
	methods: {
		editHandling() {
			this.isEditing = !this.isEditing
		},
		saveEdit() {

			const dataToUpdate = {
				"id": this.$route.params.id,
				"title": this.item.title,
				"description": this.item.description,
				"headline": this.item.headline,
				"image": this.item.image,
				"author": this.item.author,
				"date": this.item.date,
				"media": this.item.media
			};
			this.$store.dispatch('updateData', dataToUpdate)

			this.$router.push('/')
		}
	},
	created() {
		// console.log('hallo')
  },
	mounted() {
  setTimeout(() => {
    this.item.title = `${this.news.title}`
    this.item.image = `${this.news.image}`
    this.item.headline = `${this.news.headline}`
    this.item.description = `${this.news.description}`
  }, 500)
}
}
</script>

<style lang="scss">
.detail {
	margin: 3.5rem 12.5rem 6rem 12.5rem;
  border: 1px solid transparent;

	&__show {
		border: 1px solid transparent;

		.show-date {
			border: 1px solid transparent;
			display: flex;
			font-size: 2rem;
			gap: 1.4rem;
			align-items: center;
			margin-bottom: 1.3rem;

			i {
				font-size: .8rem;
			}
		}

		.show-title {
			border: 1px solid transparent;
			font-size: 3rem;
			margin-bottom: 3.5rem;
		}

		.show-description {
			border: 1px solid transparent;
			font-size: 2.2rem;
			line-height: 3.52rem;
			margin-bottom: 3.5rem;
		}

		.show-author {
			border: 1px solid transparent;
			font-size: 2rem;
			color: #545353;
			margin-bottom: 6.5rem;
			font-style: italic;
		}
	}

	.show-image, .form-image {
		border: 1px solid transparent;
		height: 45.5rem;
		width: 100%;
		object-fit: cover;
		object-position: cover;
		margin-bottom: 3.5rem;
	}

	.show-btn-edit, .show-btn-cancel, .show-btn-save {
		border: 1px solid transparent;
		width: 100%;
		background-color: black;
		color: white;
		font-size: 2.4rem;
		padding: 1.6rem;
		cursor: pointer;
	}

	.show-btn-cancel {
		border: 1px solid black;
		background-color: transparent;
		color: black;
		margin-top: 2.5rem;
	}


	&__edit {
		border: 1px solid transparent;

		.edit-form {
			border: 1px solid transparent;
		}

		.form-input {
			border: 1px solid transparent;
			display: flex;
			flex-direction: column;
			gap: 2rem;
			margin-bottom: 3.5rem;

			label {
				font-size: 2.4rem;
			}

			input {
				border: 1px solid black;
				padding: 2rem;
				font-family: 'Merriweather', serif;
				font-size: 3rem;
				outline: none;
			}
		}

		.form-input--url {
			input {
				font-family: 'roboto', sans-serif;
				font-size: 2.2rem;
			}
		}

		.ck-editor {
			border: 1px solid black;
			margin-bottom: 6.5rem;
			font-size: 2.2rem;
		}
	}
}
</style>