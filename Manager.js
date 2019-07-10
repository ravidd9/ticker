class Manager{
    constructor(){
        this.messages = [
            {
                id: 1,
                pic: "https://api.adorable.io/avatars/1.jpg",
                name: "Moshe",
                date: new Date().toString().substring(0,15),
                text: "hey"
            },
            {
                id: 2,
                pic: "https://api.adorable.io/avatars/2.jpg",
                name: "David",
                date: "9.7.19",
                text: "hello"
            },
            {
                id: 3,
                pic: "https://api.adorable.io/avatars/3.jpg",
                name: "Dor",
                date: "7.2.19",
                text: "hi :)"
            },
            {
                id: 4,
                pic: "https://api.adorable.io/avatars/4.jpg",
                name: "Itamar",
                date: "7.2.19",
                text: "how you doing guys?"
            },
            {
                id: 5,
                pic: "https://api.adorable.io/avatars/5.jpg",
                name: "Eyal",
                date: "7.2.19",
                text: "hi there you all"
            },
            {
                id: 6,
                pic: "https://api.adorable.io/avatars/6.jpg",
                name: "Almog",
                date: "7.2.19",
                text: "my name is almog"
            },
            {
                id: 7,
                pic: "https://api.adorable.io/avatars/7.jpg",
                name: "Tzahi",
                date: "7.2.19",
                text: "im here too"
            },
            {
                id: 8,
                pic: "https://api.adorable.io/avatars/8.jpg",
                name: "Nevo",
                date: "7.2.19",
                text: "whats up"
            },
            {
                id: 9,
                pic: "https://api.adorable.io/avatars/9.jpg",
                name: "Yogev",
                date: "7.2.19",
                text: "hellllooow"
            },
            {
                id: 10,
                pic: "https://api.adorable.io/avatars/10.jpg",
                name: "Yael",
                date: "7.2.19",
                text: "hey there"
            }
        ]
        // ,this.threeMessages = [...this.messages.splice(7,3)]
    }

    // getNextThree =()=> {
    //     if(this.threeMessages[0].id === 1){
    //         this.threeMessages.splice(2,1)
    //         let newMessage = this.messages[7]
    //         // console.log(newMessage)
    //         this.threeMessages.unshift(newMessage)
    //     }else{
    //         this.threeMessages.splice(2,1)
    //         let lastID = this.threeMessages[0].id
    //         let newMessage = this.messages.find(m => m.id === lastID -1)
    //         this.threeMessages.unshift(newMessage)
    //     }
    // }
}