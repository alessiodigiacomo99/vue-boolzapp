let root = new Vue({
    el: "#root",
    data:{
        userChat:[],
        contacts: [
            michele = {
                name: "michele",
                avatar: "./assets/img/avatar_1.jpg",
                messageUno: ["porta a spasso il cane", "mi senti??"],
                messageDue: ["okok", "ci vediamo dopo"]
            },
            fabio = {
                name: "fabio",
                avatar: "./assets/img/avatar_2.jpg",
                messageUno: ["ciao, come sta?", "è da tanto che non ci vediamo"],
                messageDue: ["okok", "ci vediamo dopo"]
            },
            samuele = {
                name: "samuele",
                avatar: "./assets/img/avatar_3.jpg",
                messageUno: ["mi rispondi???"],
                messageDue: ["okok", "ci vediamo dopo"]
            },
            gianni = {
                name: "gianni",
                avatar: "./assets/img/avatar_4.jpg",
                messageUno: ["calcetto alle 18?", "ci serve il decimo"],
                messageDue: ["okok", "ci vediamo dopo"]
            },
            piero = {
                name: "piero",
                avatar: "./assets/img/avatar_5.jpg",
                messageUno: ["ciao nome utente sono piero", "mi conosci?", "perchè io non ti conosco"],
                messageDue: ["okok", "ci vediamo dopo"]
            },
            luisa = {
                name: "luisa",
                avatar: "./assets/img/avatar_6.jpg",
                messageUno: ["mi rispondi???"],
                messageDue: ["okok", "ci vediamo dopo"]
            },
            giovanni = {
                name: "giovanni",
                avatar: "./assets/img/avatar_7.jpg",
                messageUno: ["calcetto alle 18?", "ci serve il decimo"],
                messageDue: ["okok", "ci vediamo dopo"]
            },
            luca = {
                name: "luca",
                avatar: "./assets/img/avatar_8.jpg",
                messageUno: ["ciao nome utente sono piero", "mi conosci?", "perchè io non ti conosco"],
                messageDue: ["okok", "ci vediamo dopo"]
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
/* Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato*/