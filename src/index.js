class Sorter {
   
  constructor() {
    this.arr = [];
    this.Comparator = "";
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort;
    if (indices.length>1)
    {
      for(var j=0;j<indices.length-1;j++)
      {
        for(var i=0;i<indices.length-1;i++)
        {
          var CurrentIndex = i;
          if (CurrentIndex != indices.length)
          {
            var NextIndex = CurrentIndex+1;
          }
          var FirstElement = this.arr[indices[CurrentIndex]]; 
          var SecondElement = this.arr[indices[NextIndex]];
          switch(this.Comparator) {
            case 'REVERSE_COMPARATOR':  
            if (FirstElement < SecondElement)
            {
              this.arr[indices[CurrentIndex]] = SecondElement;
              this.arr[indices[NextIndex]] = FirstElement;  
            }
            case 'STRINGIFY_COMPARATOR': 
            if (JSON.stringify(FirstElement, null, 2).length > JSON.stringify(SecondElement, null, 2).length)
            {
              this.arr[indices[CurrentIndex]] = SecondElement;
              this.arr[indices[NextIndex]] = FirstElement;  
            }
            case 'AGE_COMPARATOR':
            if (FirstElement > SecondElement)
            {
              this.arr[indices[CurrentIndex]].age = SecondElement;
              this.arr[indices[NextIndex]].age = FirstElement;  
            }
            default:
            if (FirstElement > SecondElement)
            {
              this.arr[indices[CurrentIndex]] = SecondElement;
              this.arr[indices[NextIndex]] = FirstElement;  
            }
          } 
        }
      }
    }  
  }

  setComparator(compareFunction) {
    // your implementation
  }

}

module.exports = Sorter;