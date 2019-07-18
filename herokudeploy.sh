git init
heroku create $1 --buildpack mars/create-react-app
git add .
git commit -m "First commit - deploying"
git push heroku master
heroku open