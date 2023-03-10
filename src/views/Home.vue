<template>
  <section class="home">
    <h1 class="home__head">PILIH BERITA</h1>

    <div class="home__items">
      <div class="items-card" v-for="article in news" :key="article.id" @click="goToDetail(article)">
        <img :src="article.image" alt="item-image" class="card-image">

        <div class="card-information">
          <div class="information-date">
            <p>Published at</p><i class="fa-solid fa-circle"></i>
            <p>{{ article.date }}</p><i class="fa-solid fa-circle"></i>
            <p>{{ article.media }}</p>
          </div>

          <h1 class="information-title">
            {{ article.title }}
          </h1>

          <p class="information-headline">
            {{ article.headline }}
          </p>

          <p class="information-readmore">Read More</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Home",
  components: {
  },
  computed: {
    news() {
      return this.$store.state.news
    }
  },
  methods: {
    ...mapActions(['fetchNews']),

    goToDetail(article) {
      this.$router.push({ name: 'detail', params: { id: article.id } })
    }
  }, 
  created() {
    this.fetchNews()
  }
};
</script>

<style lang="scss">
.home {
  margin: 3.5rem 12.5rem 6rem 12.5rem;
  border: 1px solid transparent;

  &__head {
    font-size: 2.4rem;
    font-weight: 700;
    opacity: .2;
    margin-bottom: 3.5rem;
  }

  &__items {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;

    .items-card {
      border: 1px solid transparent;
      display: flex;
      align-items: center;
      gap: 3.5rem;
      cursor: pointer;

      .card-image {
        flex: 1;
        max-width: 42.2rem;
        height: 35rem;
        object-fit: cover;
        object-position: center;
        border: 1px solid transparent;
      }

      .card-information {
        flex: 1;
        max-width: 67.4rem;
        border: 1px solid transparent;

        .information-date {
          display: flex;
          font-size: 2rem;
          gap: 1.4rem;
          align-items: center;
          margin-bottom: 1.3rem;

          i {
            font-size: .8rem;
          }
        }

        .information-title {
          font-size: 3rem;
          margin-bottom: 1.9rem;
        }

        .information-headline {
          font-size: 2.2rem;
          line-height: 160%;
          margin-bottom: 1.9rem;
        }

        .information-readmore {
          font-size: 2.2rem;
          font-weight: 700;
          color: black;
        }
      }
    }
  }
}
</style>
