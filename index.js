var game = {
    rps: [`rock`,`paper`,`scisor`],
    result: document.getElementsByClassName("result")[0],
    c_point: document.getElementsByClassName("c_point")[0],
    p_point: document.getElementsByClassName("p_point")[0],
    rock: ["paper","kő"],
    paper: ["scisor","papír"],
    scisor: ["rock","olló"],
    stroke: `filter: drop-shadow(3px 0 0 red) 
    drop-shadow(-3px 0 0 red) 
    drop-shadow(0 -3px 0 red) 
    drop-shadow(0 3px 0 red);`,
    last_comp: ``,
    last_player: ``,
    calc: function(arg1) {
        let comp = this.rps[Math.floor(Math.random() * 3)];
        if (this.last_comp != `` || this.last_player != ``) {
            document.getElementById(`c_${this.last_comp}_icon`).style = `filter: none`;
            document.getElementById(`p_${this.last_player}_icon`).style = `filter: none`;
        }
        document.getElementById(`c_${comp}_icon`).style = this.stroke;
        document.getElementById(`p_${arg1}_icon`).style = this.stroke;
        this.last_comp = comp;
        this.last_player = arg1;
        let txt = `<div style="display: flex;flex-direction: row;justify-content: space-between;">
                        <span>Számítógép fogadása: </span><span class="bet">${this[`${comp}`][1]}</span>
                    </div>
                    <div style="display: flex;flex-direction: row;justify-content: space-between;">
                        <span>Játékos fogadása: </span><span class="bet">${this[`${arg1}`][1]}</span>
                    </div>`;
        if (arg1 == comp) {
            this.result.innerHTML = `<span class="bet" style="-webkit-text-fill-color: yellow;font-size: 3ch;">Döntetlen !</span><br><h2 class="bet" style="-webkit-text-fill-color: red;">A számítógép és a játékos ugyanarra fogadott !</h2>${txt}`; 
        } else {
            let ls = "t";
            if (this[`${arg1}`][0] == comp) {
                if (arg1 == "rock") {
                    ls = "vet";
                };
                this.result.innerHTML = `<span>A számítógép nyert, mivel a </span><span class="bet">${this[`${comp}`][1]}</span><span> legyőzi a ${this[`${arg1}`][1]}${ls}.</span>${txt}`;
                this.c_point.innerHTML = parseInt(this.c_point.innerHTML, 10) + 1;
            } else {
                if (comp == "rock") {
                    ls = "vet";
                };
                this.result.innerHTML = `<span>A játékos nyert, mivel a </span><span class="bet">${this[`${arg1}`][1]}</span><span> legyőzi a ${this[`${comp}`][1]}${ls}.</span>${txt}`;
                this.p_point.innerHTML = parseInt(this.p_point.innerHTML, 10) + 1;
            }
        }
        this.result.style.display = "block";
    },
    reset: function() {
        this.c_point.innerHTML = `0`;
        this.p_point.innerHTML = `0`;
        this.result.innerHTML = ``;
        this.result.style.display = "none";
        document.getElementById(`c_${this.last_comp}_icon`).style = `filter: none`;
        document.getElementById(`p_${this.last_player}_icon`).style = `filter: none`;
    }
};