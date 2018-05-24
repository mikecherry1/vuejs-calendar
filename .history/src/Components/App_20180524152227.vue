<template>
    <div>
        <div v-for="day in days">{{ day }}</div>
    </div>
</template>
<<script>
    export default {
        data() {
            return {
                month: 5,
                year: 2018
            };
        },
        computed: {
            days() {
                let days = [];
                let currentDay = this.$moment('${this.year}-${this.month}-1', 'YYYY-M-D');
                days.push{currentDay}
                
                // do {

                // } while () {

                // }
            }
        }
        }
    }
</script>