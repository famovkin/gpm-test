<template>
  <form class="form" @submit.prevent="addUser">
    <h2 class="form__title">Adding a new employee</h2>
      <my-input
        inputName="Name"
        inputType="text"
        placeholder="First and last name"
        v-model="user.name"
      />
      <my-input
        inputName="Email"
        inputType="email"
        placeholder="example@gmail.com"
        v-model="user.email"
      />
      <my-input
        inputName="Avatar link"
        inputType="text"
        placeholder="https://unsplash.com/photo-example"
        v-model="user.avatar"
      />
      <my-input
        inputName="Employee code"
        inputType="text"
        max="5"
        min="5"
        placeholder="5 characters field"
        v-model="user.employeeCode"
      />
      <my-input
        inputName="Designation"
        inputType="text"
        placeholder="E.g. Developer"
        v-model="user.designation"
      />
      <my-input
        inputName="Phone"
        inputType="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="Format: 123-456-7890"
        v-model="user.phone"
      />
      <my-input
        inputName="About"
        inputType="text"
        placeholder="Few words about yourself"
        v-model="user.about"
      />
      <my-input
        inputName="Joining date"
        inputType="date"
        v-model="user.joiningDate"
      />
    <my-button>
      {{ isLoading ? 'Loading...' : 'Add' }}
    </my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        avatar: '',
        employeeCode: '',
        designation: '',
        phone: '',
        joiningDate: '',
        about: '',
      },
    };
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    addUser() {
      this.$emit('add', this.user);
      this.name = '';
      this.email = '';
      this.avatar = '';
      this.employeeCode = '';
      this.designation = '';
      this.phone = '';
      this.joiningDate = '';
      this.about = '';
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #434f64;
}

.form__title {
  margin-bottom: 10px;
}
</style>
