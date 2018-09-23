class Sorter {
  constructor() {
    this.array = [];
  }

  add(element) {
    this.array.push(element);
    console.log(this.array);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    
    if(indices.length == 1) return this.array;
    
    let sortArray = [];
    let min = 0;
    let a = 0;
    let sortIndices = [];

    //сортируем массив индексов
    for (let k = 0; k < indices.length; k++) {
      for (let i = k; i < indices.length; i++) {
        min = indices[i];
        for (let j = k+1; j < indices.length; j++) {
          if (min > indices[j]){
            a = indices[i];
            min = indices[j];
            indices[i]=min;
            indices[j]=a;
          }
        }
      }
    }


    //Делаем массив из чисел по выбранным индексам
   for (let i = 0; i < indices.length; i++) {
        sortArray.push(this.array[indices[i]]);
    } 
    
    //сортируем наш массив
    for (let k = 0; k < sortArray.length; k++) {
    for (let i = k; i < sortArray.length; i++) {
      min = sortArray[i];
      for (let j = k+1; j < sortArray.length; j++) {
        if (indices[i]<indices[j] && min > sortArray[j]){
          a = sortArray[i];
          min = sortArray[j];
          sortArray[i]=min;
          sortArray[j]=a;
        }
      }
    }
    }

    //записываем полученный отсортированный массив в данный
    for (let i = 0; i < indices.length; i++) {
        this.array[indices[i]] = sortArray[i];
    } 
    
    return this.array;
  }

  setComparator(compareFunction) {
    function AGE_COMPARATOR (){

      return;
    }
  }
}

module.exports = Sorter;