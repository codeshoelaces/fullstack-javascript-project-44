install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
	
make lint:
	npx eslint .

brain-even:
	node ./bin/brain-even

brain-calc:
	node ./bin/brain-calc

brain-gcd:
	node ./bin/brain-gcd

brain-progression:
	node ./bin/brain-progression

brain-prime:
	node ./bin/brain-prime
	
