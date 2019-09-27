#Git commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits
git remote add origin git@github.com:xkrup04/react-course-2-expensify-app.git - add origin with SSH
git remote - should show origin
git remote -v - should show two urls
git push -u origin master - will push all code to github

in git bash check or test SSH
ls -a ~/.ssh  - Lists the files in your .ssh directory, if they exist
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" - Generate new SSH key if doesn't exist
eval "$(ssh-agent -s)"  - Check if ssh-agent is running
ssh-add ~/.ssh/id-rsa  - Add your SSH private key to the ssh-agent
clip < ~/.ssh/id_rsa.pub  - Copy SSH key to the clipboard
ssh -T git@github.com   - Simple test the connection
ssh -vT git@github.com  - Extended test the connection


