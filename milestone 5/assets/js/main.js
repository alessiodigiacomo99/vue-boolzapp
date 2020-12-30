let root = new Vue({
    el: "#root",
    data:{
        now : dayjs(),
        userChat:[],
        contacts: [
            michele = {
                name: "michele",
                avatar: "./assets/img/avatar_1.jpg",
                newChat: [
                    {
                        date: "10:20",
                        text: "porta a spasso il cane",
                        status: "received",
                    },

                    {
                        date: "10:20",
                        text: "mi senti??",
                        status: "received",
                    },

                    {
                        date: "10:20",
                        text: "okok",
                        status: "sent",
                    },

                    {
                        date: "10:20",
                        text: "ci vediamo dopo",
                        status: "sent",
                    }
                ]
            },
            fabio = {
                name: "fabio",
                avatar: "./assets/img/avatar_2.jpg",
                newChat: [
                    {
                        date: "10:20",
                        text: "ciao, come sta?",
                        status: "received",
                    },

                    {
                        date: "10:20",
                        text: "è da tanto che non ci vediamo",
                        status: "received",
                    },

                    {
                        date: "10:20",
                        text: "okok",
                        status: "sent",
                    },

                    {
                        date: "10:20",
                        text: "ci vediamo dopo",
                        status: "sent",
                    }
                ]
            },
            samuele = {
                    name: "samuele",
                    avatar: "./assets/img/avatar_3.jpg",
                    newChat: [
                        {
                            date: "10:20",
                            text: "mi rispondi???",
                            status: "received",
                        },
    
                        {
                            date: "10:20",
                            text: "okok",
                            status: "sent",
                        },
    
                        {
                            date: "10:20",
                            text: "ci vediamo dopo",
                            status: "sent",
                        }
                    ]
            },
            gianni = {
                    name: "gianni",
                    avatar: "./assets/img/avatar_4.jpg",
                    newChat: [
                        {
                            date: "10:20",
                            text: "calcetto alle 18?",
                            status: "received",
                        },
    
                        {
                            date: "10:20",
                            text: "ci serve il decimo",
                            status: "received",
                        },
    
                        {
                            date: "10:20",
                            text: "okok",
                            status: "sent",
                        },
    
                        {
                            date: "10:20",
                            text: "ci vediamo dopo",
                            status: "sent",
                        }
                    ]
            },
            piero = {
                    name: "piero",
                    avatar: "./assets/img/avatar_5.jpg",
                    newChat: [
                        {
                            date: "10:20",
                            text: "ciao nome utente sono piero",
                            status: "received",
                        },
    
                        {
                            date: "10:20",
                            text: "mi conosci?",
                            status: "received",
                        },
                        
                        {
                            date: "10:20",
                            text: "perchè io non ti conosco",
                            status: "received",
                        },
    
                        {
                            date: "10:20",
                            text: "okok",
                            status: "sent",
                        },
    
                        {
                            date: "10:20",
                            text: "ci vediamo dopo",
                            status: "sent",
                        }
                    ]
            },
            luisa = {
                name: "luisa",
                avatar: "./assets/img/avatar_6.jpg",
                newChat: [
                    {
                        date: "10:20",
                        text: "mi rispondi???",
                        status: "received",
                    },

                    {
                        date: "10:20",
                        text: "okok",
                        status: "sent",
                    },

                    {
                        date: "10:20",
                        text: "ci vediamo dopo",
                        status: "sent",
                    }
                    
                ]
            },
            giovanni = {
                name: "giovanni",
                avatar: "./assets/img/avatar_7.jpg",
                newChat: [
                    {
                        date: "10:20",
                        text: "calcetto alle 18?",
                        status: "received",
                    },

                    {
                        date: "10:20",
                        text: "ci serve il decimo",
                        status: "received",
                    },

                    {
                        date: "10:20",
                        text: "okok",
                        status: "sent",
                    },

                    {
                        date: "10:20",
                        text: "ci vediamo dopo",
                        status: "sent",
                    }
                ]
            },
            luca = {
                name: "luca",
                avatar: "./assets/img/avatar_8.jpg",
                newChat: [
                    {
                        date: "10:20",
                        text: "ciao nome utente sono luca",
                        status: "received",
                    },

                    {
                        date: "10:20",
                        text: "mi conosci?",
                        status: "received",
                    },
                    
                    {
                        date: "10:20",
                        text: "perchè io non ti conosco",
                        status: "received",
                    },

                    {
                        date: "10:20",
                        text: "okok",
                        status: "sent",
                    },

                    {
                        date: "10:20",
                        text: "ci vediamo dopo",
                        status: "sent",
                    }
                ]
            },
        ],
        nuovaListaDiContatti:[],
        newMessage: "",
        messaggioDiCortesia : "ok",
        search :"",
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
                this.userChat.push(this.nuovaListaDiContatti[index]);
            }
            
        },
        rimuoviMessaggio(index){
            this.userChat[0].newChat.splice(index, 1);
        }
    },
    created(){
        if(this.userChat.length === 0){
            this.userChat.push(this.contacts[0])
        };
        for (let i = 0; i < this.contacts.length; i++) {
            this.nuovaListaDiContatti.push(this.contacts[i])
        };
        let month = this.now.$M + 1;
        let day = this.now.$D;
        let hour = this.now.$H;
        let minute = this.now.$m;
        if (minute < 10){
            minute = `0${minute}`
        }
        let giorno = `${day}/${month} alle ${hour}:${minute}`;
        let y = document.getElementsByClassName("giorno");
        y[0].innerHTML = giorno;   
    },
    beforeUpdate(){
        if(this.search.length > 0){
            this.nuovaListaDiContatti.splice(0);
            for (let i = 0; i < this.contacts.length; i++) {
                var nuovoNome = this.contacts[i].name.slice(0, (this.search.length)); 
                if(nuovoNome == this.search){
                    this.nuovaListaDiContatti.push(this.contacts[i]);
                }   
            }
            
        }else{
            this.nuovaListaDiContatti.splice(0);
            for (let i = 0; i < this.contacts.length; i++) {
                this.nuovaListaDiContatti.push(this.contacts[i])
            }; 
        }
    }
})
/* cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato */