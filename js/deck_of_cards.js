// "use strict";

function Deck() {
  this.cards = [];

  this.count = function() {
    return this.cards.length;
  };

  this.init = function() {
    for (var s = 1; s <= 4; s++) {
      for (var r = 1; r <= 13; r++) {
        this.cards.push(new Card(r, s));
      }
    }
  };

  this.show = function() {
    for (var n = 0; n < this.cards.length; n++) {
      $("#deck").
        append("<li>Card: " + this.cards[n].rank + " of " + this.cards[n].suit + "</li>").
        hide()
      console.log(this.cards[n].suit + "-" + this.cards[n].rank)
    }
  }

  this.reveal = function() {
    $("#deck").fadeIn();
    $(this).fadeOut();
  }

  this.shuffle = function() {
    var copy = [], n = this.cards.length, i, take;

    // While there remain elements to shuffle…
    while (n) {

      // Pick a remaining element…
      rand = Math.floor(Math.random() * n--);

      // And move it to the new array.
      take = this.cards.splice(rand, 1)[0]
      copy.push(take);
    }

    this.cards = copy;
  }

  this.shuffleFast = function () {
    var m = this.cards.length, t, i;

    // While there remain elements to shuffle…
    while (m > 0) {

      // Pick a remaining element…
      rand = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[rand];
      this.cards[rand] = t;
    }
  }
}

function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
  this.show = function() {
    return this.rank + " of " + this.suit;
  }
}



d = new Deck();
d.init();

d.show();


$("button#reveal-cards").on("click", d.reveal);
