
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Dynamic JavaScript Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    #dynamicText {
      color: darkblue;
      margin-bottom: 15px;
    }
    .highlight {
      background-color: yellow;
      padding: 5px;
      border-radius: 3px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to My Page</h1>
  </header>

  <main>
    <section>
      <p id="dynamicText">This text will change when you click the button.</p>
      <button id="changeTextBtn">Change Text</button>
      <button id="toggleBoxBtn">Add/Remove Box</button>
    </section>
  </main>

  <footer>
    <small>&copy; 2025 My Website</small>
  </footer>

  <script>
    const dynamicText = document.getElementById('dynamicText');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const toggleBoxBtn = document.getElementById('toggleBoxBtn');

    // Change text content and style on button click
    changeTextBtn.addEventListener('click', () => {
      dynamicText.textContent = 'The text has been changed!';
      dynamicText.classList.toggle('highlight'); // toggle highlight style
    });

    // Add or remove a new box element dynamically
    toggleBoxBtn.addEventListener('click', () => {
      let box = document.getElementById('dynamicBox');
      if (box) {
        box.remove();
      } else {
        box = document.createElement('div');
        box.id = 'dynamicBox';
        box.textContent = 'I am a dynamically added box!';
        box.style.border = '2px solid green';
        box.style.padding = '10px';
        box.style.marginTop = '10px';
        document.querySelector('main section').appendChild(box);
      }
    });
  </script>
</body>
</html>
