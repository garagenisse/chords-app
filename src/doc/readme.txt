// Publish to Github pages 

- Package to dist/chords-app
ng build --prod --base-href "chords-app"

- Push to gh-pages branch and deploy
npx ngh --dir=dist/chords-app
