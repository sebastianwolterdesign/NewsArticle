function handleSubmit(event) {
    event.preventDefault();
  
    let formText = document.getElementById('name').value;
  
    if (!formText) {
      alert("Input cannot be empty");
      return;
    }
  
    fetch('http://localhost:8081/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: formText }),
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById('results').innerHTML = `
        <p>Polarity: ${data.score_tag}</p>
        <p>Subjectivity: ${data.subjectivity}</p>
        <p>Text: ${formText}</p>
      `;
    });
  }
  
  export { handleSubmit };