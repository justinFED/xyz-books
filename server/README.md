# XYZ Books

Welcome to the XYZ Books project repository! This project aims to develop an application that facilitates the retrieval of information from students, college textbooks, and other course materials. The application provides functionalities such as displaying applicable product data (e.g., authors, publishers) and converting International Standard Book Numbers (ISBNs) to and from different formats.

## Prerequisites

**Required Ruby Version**:
  ``` bash
  3.2.0
  ```

**Required Rails Version**:
  ``` bash
  7.1.3
  ```

## Project Setup

1. **Go to server folder**:
   ``` bash
   cd server
   ```

2. **Install Dependencies**:
   ``` bash
   bundle install
   ```

3. **Start Server**:
   ``` bash
   # Create Database
   rails db:create

   # Migration
   rails db:migrate

   # Seeding
   rails db:seed
    ```

4. **Start Server**:
    ``` bash
    rails s
    ```
