<template>
    <div id="grid_cmps">
        <div id="C01"><C01/></div>
        <div id="C02"><C02/></div>
    </div>
</template>

<script>
import C01 from '@/components/C01.vue'
import C02 from '@/components/C02.vue'

export default {
    
    components: {
        C01,
        C02,
    },

};
</script>

<style>
    #grid_cmps { 
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: grid;
        grid-gap: 0px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-template-areas:                       
            "C01 C02"
            "C01 C02";
    }

</style>