<template>
    <div>
        城市测试
        <vueCity @changeCity="changeCity"></vueCity>
    </div>
</template>
<script>
import vueCity from 'vue-city-select'
export default {
    components:{
        vueCity
    },
     methods:{
         changeCity(cityName){   
            alert("选择的城市是"+cityName);
        }
     }  
}
</script>
<style>

</style>
