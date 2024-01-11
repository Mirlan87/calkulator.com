function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function deleteBlock() {
    var blockToDelete = document.getElementById("calkut");
    if (blockToDelete) {
      blockToDelete.remove();
    } else {
      alert("Блок не найден!");
    }

    var parentBlock = clickedButton.parentNode;

    // Клонируем кнопку
    var buttonClone = clickedButton.cloneNode(true);

    while (parentBlock.firstChild) {
      parentBlock.removeChild(parentBlock.firstChild);
    }

    parentBlock.appendChild(buttonClone);
  }

  

  