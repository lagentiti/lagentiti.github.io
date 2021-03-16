const config = 
{
    "pseudo": "l'agent titi",
    "tag": "2444",
    "avatar": "https://cdn.discordapp.com/avatars/361407855166750723/bfa486cba188abcc290f4ac28357803a.png?size=128",
    "statut": "Wesh",
    "badge": [
        // {
        //     "name": "Nitro",
        //     "image": "https://discord.com/assets/386884eecd36164487505ddfbac35a9d.svg"
        // },
        // {
        //     "name": "HypeSquad Balance",
        //     "image": "https://discord.com/assets/2a085ed9c86f3613935a6a8667ba8b89.svg"
        // },
        // {
        //     "name": "HypeSquad Bravery",
        //     "image": "https://discord.com/assets/64ae1208b6aefc0a0c3681e6be36f0ff.svg"
        // },
        // {
        //     "name": "Hypesquad Brilliance",
        //     "image": "https://discord.com/assets/d3478c6bd5cee0fc600e55935ddc81aa.svg"
        // },
        // {
        //     "name": "Early Verified Bot",
        //     "image": "https://discord.com/assets/785d81fdbedd133e213da693aba98774.svg"
        // }
    ],
    "project": [
        
    ]
}
let body = new Vue({
    el: '#app',
    data: {
        avatar: config.avatar,
        pseudo: config.pseudo,
        badge: config.badge,
        statut: config.statut,
        project: config.project,
    }
});
let head = new Vue({
        el: "#title",
        data: {
            pseudo: config.pseudo,
            tag: config.tag,
            avatar: confirm.avatar
        }
},
{
        el: "#logo",
        data: {
            avatar: config.avatar
        }
    }
);
