<template>
    <div class="mt-2">
        <span>
            {{ messageWithEmoji }} ohh add brabra
            {{ askwow }}
        </span>
        <v-btn @click="reverseMessage">
            Reverse Message
        </v-btn>
        {{ avgwow }}
        {{ sumavg }}
        <p v-for="i in 5" :key="i">{{ i }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue.js',
            avgwow: null,
            sumavg: null,
            sumfor: null
        }
    },
    computed: {
      messageWithEmoji() {
        console.log('mes')
        return `${this.message} 😍`
      },
      askwow() {
        console.log('askwow')
        let c = 5, d = 3, e = 10;
        let ask = (c + d + e);
        return ask
      }
    },
    methods: {
      reverseMessage () {
        this.message = this.message.split('').reverse().join('') 
        const testdosi = 'wowwww' 
        console.log(`remes ${testdosi}`)
        var a = 5;
        var b = 8;

        let c = 5, d = 3, e = 10
        let avg = (c + d + e) / 5
        this.avgwow = avg
        this.sumavg = ++avg

        console.log("Average is " + avg)
        console.log(c+d+e)

        console.log(a+b)
        console.log( a+" + "+b+" = "+(a + b) )
        console.log( a+" - "+b+" = "+(a - b) )
        console.log( a+" x "+b+" = "+(a * b) )
        console.log( a+" / "+b+" = "+(a / b) )
        console.log( a+" % "+b+" = "+(a % b) )
      }
    }
}
</script>