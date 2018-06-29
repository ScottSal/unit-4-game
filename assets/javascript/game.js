var MarioPartyRPG = {
    gameStage: "initial",
    characterSelected: "",
    characterObject: "",
    opponentSelected: "",
    opponentObject: "",
    opponentsRemain: 4
};

var Mario = {
    health: 220,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/mario.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#MarioHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var Luigi = {
    health: 195,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/luigi.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#LuigiHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var PrincessPeach = {
    health: 200,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/princess_peach.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#PrincessPeachHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
}; 

var Yoshi = {
    health: 205,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/yoshi.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#YoshiHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var Bowser = {
    health: 225,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/bowser.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#BowserHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var Wario = {
    health: 215,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/wario.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#WarioHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var Waluigi = {
    health: 200,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/waluigi.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#WaluigiHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var Goomba = {
    health: 200,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/goomba.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#GoombaHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var MarioDiv = $("#Mario");
var LuigiDiv = $("#Luigi");
var PrincessPeachDiv = $("#PrincessPeach");
var YoshiDiv = $("#Yoshi");
var BowserDiv = $("#Bowser");
var WarioDiv = $("#Wario");
var WaluigiDiv = $("#Waluigi");
var GoombaDiv = $("#Goomba");

var pipe = new Audio('./assets/sounds/warp_pipe.mp3');
var death = new Audio('./assets/sounds/death_sound.mp3');
var win = new Audio('./assets/sounds/win_sound.mp3');
var mario = new Audio('./assets/sounds/mario_its_me.mp3');
var bowser = new Audio('./assets/sounds/bowser_laugh.mp3');
var luigi = new Audio('./assets/sounds/luigi_sound.mp3');
var peach = new Audio('./assets/sounds/peach_sound.mp3');
var wario = new Audio('./assets/sounds/wario_sound.mp3');
var yoshi = new Audio('./assets/sounds/yoshi_sound.mp3');
var waluigi = new Audio('./assets/sounds/waluigi_sound.mp3');
var goomba = new Audio('./assets/sounds/goomba_sound.mp3');