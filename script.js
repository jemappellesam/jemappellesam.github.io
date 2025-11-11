

* {
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: linear-gradient(135deg, #20232a, #3b3f47);
    color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    margin: 0;
    padding-top: 40px;
}

.container {
    background: #2c2f36;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0,0,0,0.4);
    width: 90%;
    max-width: 500px;
}

h1 {
    text-align: center;
    color: #00bfa6;
    margin-bottom: 25px;
}

.input-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 6px;
    outline: none;
    background: #444;
    color: #fff;
    font-size: 1rem;
}

button {
    width: 100%;
    padding: 12px;
    background: #00bfa6;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: 0.3s;
}

button:hover {
    background: #00997f;
}

.result {
    margin-top: 25px;
    background: #1f2126;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.result h2 {
    color: #00bfa6;
    margin-bottom: 10px;
}

.result p {
    margin: 8px 0;
    font-size: 1.1rem;
}
