<template>
  <li class="user-card">
      <p class="user-card__number">{{ user.id }}</p>
      <div class="user-card__basic-info">
        <img class="user-card__avatar" :src="user.avatar" alt="Avatar">
        <div class="user-card__wrapper">
          <p class="user-card__name">{{ user.name }}</p>
          <p class="user-card__email">{{ user.email }}</p>
        </div>
      </div>
      <p class="user-card__code">{{ user.employeeCode }}</p>
      <p class="user-card__designation">{{ user.designation }}</p>
      <p class="user-card__phone">{{ formatPhone(user.phone) }}</p>
      <p class="user-card__date">{{ formatDate(user.joiningDate) }}</p>
      <my-more-button/>
    </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const [year, monthNumber, day] = date.slice(0, 10).split('-');
      return `${day} ${months[Number(monthNumber) - 1]}, ${year}`;
    },
    formatPhone(number) {
      return number
        // убираем "1-"
        .split('-')
        .filter((item) => item !== '1')
        .join('-')
        // заменяем "." на "-"
        .split('.')
        .join('-')
        // убираем "x***"
        .split(' ')
        .filter((item) => !item.includes('x'))
        .join('-')
        // убираем скобки
        .split(' ')
        .map((item) => item
          .split('')
          .filter((letter) => letter !== '(' && letter !== ')')
          .join(''))
        .join('-');
    },
  },
};
</script>

<style scoped>
.user-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  min-width: 768px;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  color: #2b3a5a;
  transition: box-shadow 0.2s ease-in-out;
}

.user-card:hover {
  box-shadow: 0px 2px 8px 0px rgb(50, 50, 50, 0.3);
}

.user-card__number {
  flex: .4;
  text-align: center;
  min-width: 10px;
}

.user-card__basic-info {
  flex: 2;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 240px;
}

.user-card__name {
  font-weight: 700;
}

.user-card:first-child > .user-card__basic-info:after {
  content: 'Basic Info';
  top: -50px;
  left: 0;
  transform: translate(0);
}

.user-card__code,
.user-card__designation,
.user-card__phone,
.user-card__date
{
  flex: 1;
  position: relative;
  text-align: center;
  white-space: nowrap;
  min-width: 90px;
  width: 90px;
  font-weight: 700;
}

:after {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translate(-50%);
  color: #b5bbc9;
  font-weight: 700;
}

.user-card:first-child > .user-card__code:after {
  content: 'Employee';
}
.user-card:first-child > .user-card__designation:after {
  content: 'Designation';
}
.user-card:first-child > .user-card__phone:after {
  content: 'Phone Number';
}
.user-card:first-child > .user-card__date:after {
  content: 'Joining Date';
}

.user-card__avatar {
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
}
</style>
