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
