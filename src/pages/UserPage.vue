<template>
  <div class="profile" v-if="!isUserLoading">
    <div class="profile__content">
      <div class="profile__background"/>
      <img
        class="profile__avatar"
        :src="user.avatar"
        :alt="user.name"
      />
      <div class="profile__texts">
        <h1 class="profile__title">{{ user.name }}</h1>
        <p class="profile__subtitle">{{ user.designation }}</p>
        <p class="profile__info"><strong>Joining Date: </strong>{{ user.joiningDate }}</p>
        <p class="profile__info"><strong>Phone number: </strong>{{ user.phone }}</p>
        <p class="profile__info"><strong>Email: </strong>{{ user.email }}</p>
        <p class="profile__info"><strong>About: </strong>{{ user.about }}</p>
        <div class="profile__buttons">
          <my-button
            class="profile__button"
            @click="$router.push('/')"
          >
            Back
          </my-button>
          <my-button
            class="profile__button"
            @click="removeUser"
          >
            Delete
          </my-button>
        </div>
      </div>
    </div>
  </div>
  <my-preloader v-else/>
</template>

<script>
import { useRouter } from 'vue-router';
import useUser from '@/hooks/useUser';
import api from '@/utils/api';

export default {
  setup() {
    const router = useRouter();
    const { user, isUserLoading } = useUser(router.currentRoute.value.params.id);
    return { user, isUserLoading };
  },
  methods: {
    removeUser() {
      api.deleteUser(this.$route.params.id)
        .then(() => { this.$router.go(-1); })
        .catch((err) => console.log('Ошибка. Запрос не выполнен:', err));
    },
  },
};
</script>

<style>
.profile {
  padding: 40px 20px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
}

.profile__content {
  width: 600px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 20px 0px rgb(50, 50, 50, 0.3);
  position: relative;
}

.profile__background {
  height: 200px;
  width: 100%;
  background: #434f64;
  margin-bottom: 140px;
}

.profile__title {
  text-align: center;
  margin-bottom: 5px;
}

.profile__subtitle {
  text-align: center;
  font-size: 20px;
  margin-bottom: 25px;
}

.profile__info {
  margin-bottom: 5px;
}

.profile__avatar {
  position: absolute;
  top: 50px;
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 10px solid #fff;
  border-radius: 50%;
}

.profile__texts {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.profile__buttons {
  align-self: flex-end;
  margin-top: 10px;
}

.profile__button {
  margin-right: 10px;
}

.profile__button:last-child {
  margin-right: 0px;
}
</style>
