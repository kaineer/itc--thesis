all:
	echo "const cases = (" >cases.js
	cat cases.yml | yq . >>cases.js
	echo ");" >>cases.js
