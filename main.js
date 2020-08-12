function init() {
   begin();
   setInterval(loop, 1);
}

function begin() {
   itemDiv = document.getElementsByClassName('items');
   submit = document.getElementById('submit');
   show = document.getElementById('check');
   show.addEventListener('click', function () {
      var totals = document.getElementById('totals');
      if (window.innerWidth < 820) {
         if (show.checked == true) {
            totals.style.display = 'none';
         } else {
            totals.style.display = 'flex';
         }
      } else {
         if (show.checked == true) {
            totals.style.visibility = 'hidden';
         } else {
            totals.style.visibility = 'visible';
         }
      }
   });

   submit.addEventListener('click', createItem);

   itemList.forEach((item) => {
      item.div = document.createElement('div');

      item.div.className = item.name + ' item';

      item.div.innerHTML = item.html;
      document.getElementsByClassName('items')[0].appendChild(item.div);

      var line = document.createElement('div');
      line.className = 'line';
      document.getElementsByClassName('items')[0].appendChild(line);

      if (item.actual != (null || 0)) {
         item.div.querySelector('#actualPrice').value = item.actual;
      }
      if (item.quoted != (null || 0)) {
         item.div.querySelector('#quotePrice').value = item.quoted;
      }
   });
}

function loop() {
   oldTotalActual = totalActual;
   oldTotalQuoted = totalQuoted;

   totalActual = 0;
   totalQuoted = 0;

   itemList.forEach((item) => {
      item.actual = Number(item.div.querySelector('#actualPrice').value);
      item.quoted = Number(item.div.querySelector('#quotePrice').value);
      item.difference = item.quoted - item.actual;
      item.div.querySelector('#differencePrice').value = item.difference;
      totalActual += item.actual;
      totalQuoted += item.quoted;
   });
   if (
      oldTotalActual > totalActual ||
      oldTotalActual < totalActual ||
      oldTotalQuoted > totalQuoted ||
      oldTotalQuoted < totalQuoted
   ) {
      save();
   }

   document.getElementById('totalActual').innerHTML = '£' + totalActual;
   document.getElementById('totalQuoted').innerHTML = '£' + totalQuoted;
   document.getElementById('totalDifference').innerHTML =
      '£' + (totalQuoted - totalActual);
}
