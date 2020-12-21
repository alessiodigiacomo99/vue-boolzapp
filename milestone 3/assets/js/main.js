let root = new Vue({
    el: "#root",
    data:{
        now : dayjs(),
        userChat:[],
        contacts: [
            michele = {
                name: "michele",
                avatar: "./assets/img/avatar_1.jpg",
                messageUno: ["porta a spasso il cane", "mi senti??"],
                messageDue: ["okok", "ci vediamo dopo"],
                newChat: [
                    
                ]
            },
            fabio = {
                name: "fabio",
                avatar: "./assets/img/avatar_2.jpg",
                messageUno: ["ciao, come sta?", "è da tanto che non ci vediamo"],
                messageDue: ["okok", "ci vediamo dopo"],
                    newChat: [
                        
                    ]
                },
                samuele = {
                    name: "samuele",
                    avatar: "./assets/img/avatar_3.jpg",
                    messageUno: ["mi rispondi???"],
                    messageDue: ["okok", "ci vediamo dopo"],
                    newChat: [
                       
                    ]
                },
                gianni = {
                    name: "gianni",
                    avatar: "./assets/img/avatar_4.jpg",
                    messageUno: ["calcetto alle 18?", "ci serve il decimo"],
                    messageDue: ["okok", "ci vediamo dopo"],
                    newChat: [
                      
                    ]
                },
                piero = {
                    name: "piero",
                    avatar: "./assets/img/avatar_5.jpg",
                    messageUno: ["ciao nome utente sono piero", "mi conosci?", "perchè io non ti conosco"],
                    messageDue: ["okok", "ci vediamo dopo"],
                    newChat: [
                    
                    ]
            },
            luisa = {
                name: "luisa",
                avatar: "./assets/img/avatar_6.jpg",
                messageUno: ["mi rispondi???"],
                messageDue: ["okok", "ci vediamo dopo"],
                newChat: [
                    
                ]
            },
            giovanni = {
                name: "giovanni",
                avatar: "./assets/img/avatar_7.jpg",
                messageUno: ["calcetto alle 18?", "ci serve il decimo"],
                messageDue: ["okok", "ci vediamo dopo"],
                newChat: [
                    
                ]
            },
            luca = {
                name: "luca",
                avatar: "./assets/img/avatar_8.jpg",
                messageUno: ["ciao nome utente sono piero", "mi conosci?", "perchè io non ti conosco"],
                messageDue: ["okok", "ci vediamo dopo"],
                newChat: [
                    
                ]
            },
        ],
        newMessage: "",
        messaggioDiCortesia : "ok",
        x : document.getElementsByClassName("orario"),
        newX : document.getElementsByClassName("risposta"),
    },
    methods:{
        type(){
            let now = dayjs();
            let hour = now.$H;
            let minute = now.$m;
            let day = now.$D;
            let month = now.$M + 1;
            if (minute < 10){
                minute = `0${minute}`
            }
            let ora = `${hour}:${minute}`;
            this.userChat[0].newChat.push({
                date: ora,
                text: this.newMessage,
                status: "sent",
            });
            this.newMessage = "";
            setTimeout(() => {
                this.userChat[0].newChat.push({
                    date: ora,
                    text: this.messaggioDiCortesia,
                    status: "received",
                });
                let giorno = `${day}/${month} alle ${hour}:${minute}`;
                let y = document.getElementsByClassName("giorno");
                y[0].innerHTML = giorno;

            }, 1000);
        },
        chat(index){
            if(this.userChat.length >= 1){
                this.userChat.splice(0);
                this.userChat.push(this.contacts[index]);
            }
            
        },
    },
    created(){
        if(this.userChat.length === 0){
            this.userChat.push(this.contacts[0])
        };
        let month = this.now.$M + 1;
        let day = this.now.$D;
        let hour = this.now.$H;
        let minute = this.now.$m;
        if (minute < 10){
            minute = `0${minute}`
        }
        let giorno = `${day}/${month} alle ${hour}:${minute}`;
        let ora = `${hour}:${minute}`;
        for (let i = 0; i < this.x.length; i++) {
            this.x[i].innerHTML = ora;   
        };
        let y = document.getElementsByClassName("giorno");
        y[0].innerHTML = giorno;   

    },
    updated(){

    }
})
/* Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.
mancano le date */