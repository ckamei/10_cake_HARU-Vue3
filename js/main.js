Vue.createApp({
  setup() {
    let items = Vue.ref([]);
    let sortOrder = Vue.ref(0);
    let isShow = Vue.ref(true);
    let newArray = Vue.ref([]);
    
    //json取得
    Vue.onMounted(() => {
      axios
      .get("js/cakeMenu.json")
      .then(response => items.value = response.data)
      .catch((err) => {
        console.log("error")
      });
    });
    
    //値段にカンマをつける関数
    function number_format(value) {
      if(!value) return ''
      return value.toLocaleString()
    }
    
    let filteredList = Vue.computed(() => {
      let
      let total = items.value.length
      return total
    })

    return {items, console, number_format, isShow, sortOrder,newArray, filteredList};
  },
}).mount("#app");
