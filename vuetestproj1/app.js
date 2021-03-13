const app = Vue.createApp({
    //data, functions
    data() {
        return {
            showBooks: true,
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            age: 45
        }
    },
    methods: {
        changeTitle(mytitle) {
            //this.title = 'Words of Radiance' 
            this.title = mytitle
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }

    }


})

app.mount('#app')
