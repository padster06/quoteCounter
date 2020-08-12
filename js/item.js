class Item {
   constructor(name) {
      this.name = name;
      this.createElement(name);
      this.div;
      this.difference;
   }

   createElement(name) {
      this.div = document.createElement('div');
      this.div.className = name + ' item';
      this.div.innerHTML = '<h1>' + name + html;
      console.log(itemDiv);
      document.getElementsByClassName('items')[0].appendChild(this.div);

      var line = document.createElement('div');
      line.className = 'line';
      document.getElementsByClassName('items')[0].appendChild(line);
   }

   updateDifference() {
      var actual = this.div.querySelector('#actualPrice').value;
      var quoted = this.div.querySelector('#quotePrice').value;
      this.difference = quoted - actual;
      this.div.querySelector('#differencePrice').value = this.difference;

      if (this.difference > 0) {
         this.div.style.borderColor = 'green';
      } else if (this.difference < 0) {
         this.div.style.borderColor = 'red';
      } else {
         this.div.style.borderColor = 'blue';
      }
   }

   returnQuoted() {
      return Number(this.div.querySelector('#quotePrice').value);
   }

   returnActual() {
      return Number(this.div.querySelector('#actualPrice').value);
   }
}

function item(name) {
   this.name = name;
   this.difference;
   this.html = '<h1>' + name + html;
   this.div = document.createElement('div');
   this.actual;
   this.quoted;
}
