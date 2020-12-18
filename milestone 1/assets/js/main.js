/* Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto */
let root = new Vue({
    el: "#root",
    data:{
        userChat:[],
        contacts: [
            michele = {
                name: "michele",
                avatar: "./assets/img/avatar_1.jpg"
            },
            fabio = {
                name: "fabio",
                avatar: "./assets/img/avatar_2.jpg"
            },
            samuele = {
                name: "samuele",
                avatar: "./assets/img/avatar_3.jpg"
            },
            gianni = {
                name: "gianni",
                avatar: "./assets/img/avatar_4.jpg"
            },
            piero = {
                name: "piero",
                avatar: "./assets/img/avatar_5.jpg"
            },
        ]
    },
    methods:{
        chat(index){
            if(this.userChat.length >= 1){
                this.userChat.splice(0);
                this.userChat.push(this.contacts[index]);
            }
        }
    },
    created(){
        if(this.userChat.length === 0){
            this.userChat.push(this.contacts[0])
        }
    }
})