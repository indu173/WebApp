# To-Do List Application

This is a simple To-Do application built using HTML, CSS, and JavaScript. It allows users to add, complete, and delete tasks in a dynamic list.

## Project Structure
todo-app/ ├── index.html├── script.js├── styles.css


## Setup

### Requirements

- Web browser

### Usage

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/todo-app.git
    cd todo-app
    ```

2. Open `index.html` in your web browser to start using the application.

## Deploying on AWS EC2

### Prerequisites

- AWS account
- EC2 instance (Ubuntu/Debian preferred)

### Steps

1. **Launch an EC2 instance**:
    - Go to the EC2 dashboard and launch a new instance.
    - Choose an Amazon Machine Image (AMI).
    - Select an instance type (e.g., t2.micro for free tier).
    - Configure instance details, add storage, and configure security groups (allow SSH and HTTP/HTTPS).
    - Launch the instance.

2. **Connect to your EC2 instance**:
    ```bash
    ssh -i "your-key-pair.pem" ubuntu@your-ec2-public-dns
    ```

3. **Update the package manager**:
    ```bash
    sudo apt update
    ```

4. **Install Nginx**:
    ```bash
    sudo apt install nginx
    ```

5. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/todo-app.git
    cd todo-app
    ```

6. **Configure Nginx**:
    - Open the Nginx default configuration file:
        ```bash
        sudo nano /etc/nginx/sites-available/default
        ```
    - Update the server block to serve the static files:
        ```plaintext
        server {
            listen 80 default_server;
            listen [::]:80 default_server;

            root /home/ubuntu/todo-app;
            index index.html;

            server_name _;

            location / {
                try_files $uri $uri/ =404;
            }
        }
        ```

7. **Restart Nginx**:
    ```bash
    sudo systemctl restart nginx
    ```

8. **Configure Security Group**:
    - Go to the AWS Management Console.
    - Navigate to EC2 Dashboard > Security Groups.
    - Find the security group associated with your EC2 instance.
    - Edit inbound rules to add a new rule allowing traffic on port 80 (HTTP).

9. **Access your application**:
    - Open your web browser and go to `http://<your-ec2-public-ip>` to see your To-Do application.
