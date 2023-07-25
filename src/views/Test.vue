<template>
    <div class="mt-2">
        <span>
            {{ messageWithEmoji }}
        </span>
        <v-btn @click="reverseMessage">
            Reverse Message
        </v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue.js'
        }
    },
    computed: {
      messageWithEmoji() {
        console.log('mes')
        return `${this.message} 😍`
      },
    },
    methods: {
      reverseMessage () {
        this.message = this.message.split('').reverse().join('')  
        console.log('remes')
      }
    }
}
</script>