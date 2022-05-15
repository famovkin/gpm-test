export default {
  mounted(el, binding) {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = (entries) => {
      // проверка только на появление наблюдаемого блока на экране
      // подружаем новых пользователей только на вкладке Employee List
      if (entries[0].isIntersecting && binding.value.selectedFilter === 'All') {
        binding.value.cb();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
  name: 'intersection',
};
