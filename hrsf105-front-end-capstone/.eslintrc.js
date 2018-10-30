module.exports = {
  "parser": "babel-eslint",
	"extends": ['airbnb'],
  "env": {
    "jest": true,
    "browser": true,
  },
  "plugins": ["react"],
  "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
};
