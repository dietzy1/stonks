export class Domain {
    constructor(c, r) {
        this.c = c;
        this.r = r;
    }
}
function getDate() {
    const d = new Date();
    const date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    console.log(date);
    console.log(d.getDay());
    for (let i = 0; i < 5; i++) {
        const n = new Date(d);
        n.setDate(n.getDate() - i);
        const prior = n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate();
        console.log(prior);
    }
}
//# sourceMappingURL=domain.js.map