function getArr(arr, prefix) {
   var array = [];

   arr.forEach((a) => {
      if (a != '..' && a != '.') {
         if (prefix) {
            a = prefix + '/' + a;
         }
         array.push(a);
      }
   });
   dirs = dirs.concat(array);
}

function save() {
   localStorage.setItem(localStorageListKey, JSON.stringify(itemList));
   console.log('saved');
}

function createItem(event) {
   event.preventDefault();
   // items.push(new Item(document.getElementById('name').value));

   itemList.push(new item(document.getElementById('name').value));
   itemList[itemList.length - 1].div.className =
      itemList[itemList.length - 1].name + ' item';

   itemList[itemList.length - 1].div.innerHTML =
      itemList[itemList.length - 1].html;

   document
      .getElementsByClassName('items')[0]
      .appendChild(itemList[itemList.length - 1].div);

   var line = document.createElement('div');
   line.className = 'line';
   document.getElementsByClassName('items')[0].appendChild(line);

   save();

   document.getElementById('name').value = '';
}
