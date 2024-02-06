# 🐳 Docker Instructions for Filmpire Application 🎬

This README provides instructions on how to build, run, and deploy the Filmpire application using Docker.

## 🏗️ Building and Running the Application Locally

1. **Build and start the application**:

    > ⚠️ **Before building, make sure to place your movie API key in the `.env` file. Refer to the `.env.example` file for guidance.**

    Run the following command to build the Docker image and start the application:

    ```bash
    docker compose up --build
    ```

    This command builds the Docker image using the Dockerfile in the current directory and starts the application using the settings in the `docker-compose.yaml` file.

2. **Access the application**:

    After starting the application, you can access it at [http://localhost:5173](http://localhost:5173).

## 🚀 Publishing the Docker Image to Docker Hub

1. **Tag the Docker image**:

    > ⚠️ **Remember to login to Docker in CLI using "docker login" command.**

    Before publishing the Docker image to Docker Hub, it's recommended to tag the image. You can use the following command to tag the image:

    ```bash
    docker tag <image_id> <dockerhub_username>/<repository_name>:<tag>
    ```

    Replace `<image_id>` with the ID of the built Docker image, `<dockerhub_username>` with your Docker Hub username, `<repository_name>` with the name of your repository, and `<tag>` with the desired tag for the image.

    For example:

    ```bash
    docker tag myapp myusername/myrepository:latest
    ```

2. **Publish the Docker image to Docker Hub**:

    Run the following command to publish the Docker image to Docker Hub:

    ```bash
    docker push <dockerhub_username>/<repository_name>:<tag>
    ```

    Replace `<dockerhub_username>` with your Docker Hub username, `<repository_name>` with the name of your repository, and `<tag>` with the tag you used in the previous step.

    For example:

    ```bash
    docker push myusername/myrepository:latest
    ```

    After successfully pushing the image, it will be available on Docker Hub for others to use.

    Remember to replace `<dockerhub_username>` and `<repository_name>` with your actual Docker Hub username and repository name.

Happy publishing! 🚀

For more details on building and pushing Docker images, consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/) docs.

## 📚 References

-   [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)

## 📝 Notes

The Dockerfile uses a multi-stage build process. The first stage builds the application and the second stage serves the application using a lightweight Node.js runtime. The `docker-compose.yaml` file specifies the build context, build arguments, image name, environment variables, and ports for the application.

Happy coding! 💻
