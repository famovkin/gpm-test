<template>
  <label
    class="input"
    :for="inputName"
  >
    {{ inputName }}
    <input
      class="input__field"
      :id="inputName"
      :type="inputType"
      :pattern="pattern"
      :placeholder="placeholder"
      :minlength="min"
      :maxlength="max"
      :value="modelValue"
      @input="updateInput"
      required
    >
  </label>
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
    inputName: String,
    inputType: String,
    pattern: String,
    placeholder: String,
    min: String,
    max: String,
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  font-weight: 700;
}

.input__field {
  border: none;
  border-bottom: 1px solid #434f64;
  width: 100%;
  margin-bottom: 10px;
  height: 30px;
  font-size: 15px;
  outline: none;
}

.input__field:focus {
  border-bottom: 1px solid #00dc81;
}
</style>
