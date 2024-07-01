Natürlich! Hier ist ein Beispiel für eine `README.md` Datei für dein Projekt.

```markdown
# News Article Evaluation Project

## Project Description

This project is a web application that evaluates news articles using Natural Language Processing (NLP) techniques. The application allows users to enter a URL to a news article, and it then analyzes the content for sentiment (polarity) and subjectivity.

## Features

- Analyze the sentiment (positive, negative) of news articles.
- Determine the subjectivity (subjective, objective) of news articles.
- Responsive user interface with a clean design.
- Offline functionality using Service Workers.

## Project Structure

```
project-folder
├── .env
├── .gitignore
├── package.json
├── webpack.dev.js
├── webpack.prod.js
└── src
    └── client
        ├── index.js
        ├── views
        │   └── index.html
        ├── styles
        │   ├── base.scss
        │   ├── footer.scss
        │   ├── form.scss
        │   ├── header.scss
        │   ├── resets.scss
        │   └── variables.scss
        └── js
            ├── formHandler.js
            └── nameChecker.js
    └── server
        ├── index.js
        └── api.js
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sebastianwolterdesign/news-article-evaluation.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd news-article-evaluation
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Create a `.env` file in the root directory and add your API keys:**
   ```
   f99bd2593b0d82c25d2a97e0aea70b0f
   ```

## Usage

### Development Mode

To run the application in development mode with hot reloading:

```bash
npm run build-dev
```

This will start the Webpack dev server. Open your browser and navigate to `http://localhost:8081`.

### Production Mode

To build the application for production:

```bash
npm run build-prod
```

This will create a `dist` directory with the production build of the application.

To start the server:

```bash
npm start
```

Then open your browser and navigate to `http://localhost:8081`.

## Testing

To run the tests using Jest:

```bash
npm run test
```

Ensure that all tests pass successfully.

## Dependencies

- Webpack
- Babel
- Sass
- Express
- HtmlWebpackPlugin
- TerserWebpackPlugin
- Jest


## Acknowledgements

This project was built as part of the Udacity Front End Web Development Nanodegree program.

---

Feel free to contribute to the project by opening issues or submitting pull requests.
