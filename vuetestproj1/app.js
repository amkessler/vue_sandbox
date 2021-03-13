const app = Vue.createApp({
    //data, functions
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(mytitle) {
            //this.title = 'Words of Radiance' 
            this.title = mytitle
        },
        toggleShowBooks() {
            this.showBooks = false
        }

    }


})

app.mount('#app')
