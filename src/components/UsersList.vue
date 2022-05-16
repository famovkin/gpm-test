<template>
  <ul class="users-list" v-if='users.length > 0'>
    <transition-group name="users">
      <user-card
        v-for='user in users'
        :key='user.id'
        :user='user'
        @remove='$emit("remove", user)'
      />
    </transition-group>
  </ul>
  <h2 class="users-list__title" v-else>
    Список пользователей пуст
  </h2>
</template>

<script>
import UserCard from '@/components/UserCard.vue';

export default {
  components: {
    UserCard,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.users-list {
  padding-top: 40px;
  padding: 40px 8px 0;
  list-style: none;
  overflow-x: auto;
}

.users-list__title {
  color: #2b3a5a;
}

.users {
  display: inline-block;
  margin-right: 5px;
}

.users-enter-active,
.users-leave-active {
  transition: all .4s ease;
}

.users-leave-active {
  position: absolute;
}

.users-enter-from,
.users-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.users-move {
  transition: transform .4s;
}
</style>
