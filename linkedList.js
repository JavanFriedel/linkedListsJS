function node(value = null, nextNode) {
  return { value: value, nextNode: nextNode || null };
}

function LinkedList() {
  this.fullList = {};

  this.head = null;
  this.tail = null;
  this.size = 0;

  this.append = (value) => {
    const newNode = new node(value);

    if (this.size === 0) {
      this.fullList = newNode;
      this.head = newNode;
    } else {
      this.tail.nextNode = newNode;
    }

    this.size += 1;
    this.tail = newNode;
  };

  this.prepend = (value) => {
    let newNode;

    if (this.size === 0) {
      newNode = new node(value);
      this.tail = newNode;
    } else {
      newNode = new node(value, this.fullList);
    }

    this.fullList = newNode;

    this.size += 1;
    this.head = newNode;
  };

  this.getNode = (index, list) => {
    if (index <= 0) {
      return list;
    }

    return this.getNode(index - 1, list.nextNode);
  };

  this.at = (index) => {
    return this.getNode(index, this.fullList);
  };

  this.pop = () => {
    const secondLast = this.at(this.size - 2);
    secondLast.nextNode = null;
    this.size -= 1;
  };

  this.contains = (value) => {
    let searchNode = this.fullList;

    while (searchNode != null) {
      if (searchNode.value == value) {
        return true;
      }

      searchNode = searchNode.nextNode;
    }

    return false;
  };

  this.find = (value) => {
    let searchNode = this.fullList;
    let index = 0;

    while (searchNode != null) {
      if (searchNode.value == value) {
        return index;
      }

      index++;
      searchNode = searchNode.nextNode;
    }

    return false;
  };

  this.toString = () => {
    let searchNode = this.fullList;
    let finalString = '';

    while (searchNode != null) {
      finalString += `( ${searchNode.value} ) -> `;

      searchNode = searchNode.nextNode;
    }

    finalString += `null`;

    return finalString;
  };

  this.insertAt = (value, index) => {
    let currentNode = this.fullList;
    let previousNode = null;
    let currentIndex = 0;

    while (currentNode != null) {
      if (currentIndex === index) {
        const insertedNode = new node(value, currentNode);

        if (currentIndex === 0) {
          this.fullList = insertedNode;
        } else {
          previousNode.nextNode = insertedNode;
        }

        return this.toString();
      }
      previousNode = currentNode;

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return 'Index Not in List';
  };

  this.removeAt = (index) => {
    let currentNode = this.fullList;
    let previousNode = null;
    let currentIndex = 0;

    while (currentNode != null) {
      if (currentIndex === index) {
        if (currentIndex === 0) {
          this.fullList = currentNode.nextNode;
        } else {
          previousNode.nextNode = currentNode.nextNode;
        }

        return this.toString();
      }

      previousNode = currentNode;
      currentNode = currentNode.nextNode;

      currentIndex++;
    }

    return false;
  };
}

const linkedListObj = new LinkedList();

// --- Testing Consoles and Method Usage --
// linkedListObj.append('Hello');
// console.log(linkedListObj.fullList);
// linkedListObj.append('World');
// console.log(linkedListObj.fullList);
// console.log('List Size: ' + linkedListObj.size);
// linkedListObj.prepend('This is');
// console.log(linkedListObj.fullList);
// console.log('List Size: ' + linkedListObj.size);
// console.log(linkedListObj.at(2));
// linkedListObj.pop();
// console.log(linkedListObj.fullList);
// console.log('Is HOOYA in List?:');
// console.log(linkedListObj.contains('HOOYA'));
// console.log('What is the Index of Hello?');
// console.log(linkedListObj.find('Hello'));
// console.log(linkedListObj.toString());
// console.log(linkedListObj.insertAt('An', 1));
// console.log(linkedListObj.removeAt(1));
