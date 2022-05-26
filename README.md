# OssCameroon Podcasts
![podcast_logo](https://user-images.githubusercontent.com/71908316/162823953-f69840a1-d47d-4d01-adb6-5722483770a0.png)

This podcast build preview can be [here](https://go-records.me/podcasts), deployment made using [Github pages](https://pages.github.com/)

Initiative of [OssCameroon](https://osscameroon.com/) under the [MIT license](https://opensource.org/licenses/MIT)

## Requirements

- You need to install git-LFS and setup in this project:
    ```bash
    sudo apt-get install software-properties-common
    sudo curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash*
    sudo apt-get install git-lfs
    git lfs install
    ```

## Running steps

- Fork the repo on your personal account
- Clonning on your local machine
  - `git clone https://github.com/<Your_username>/podcasts`
- On your local machine, follow the steps below
  ``` 
  cd podcast
  npm install
  npm run start
  ```
- Optional:
  ```
  npm audit
  npm audit fix --force
  ```
 
 After following the steps above, the project will be running locally on the address: [http://localhost:3000](http://localhost:3000)
 
 <sub>[OssCameroon](https://github.com/osscameroon)</sub>
