# Decentralized File Sharing Project (D-FILE)

This repository contains the code for a decentralized D-FILE project built using Harhat, Smart Contract (Solidity), and React.js. The project aims to provide a secure and decentralized storage solution similar to Google Drive, where users can store and retrieve their files using blockchain technology.

|  connect wallet | share Access |
| ------- | ------- |
|![Screenshot from 2023-06-05 11-14-17](https://github.com/Deepesh76780/DecentralizedFileSharing/assets/99245631/22eb2805-80aa-4fc4-be02-c696fe985148) | ![Screenshot from 2023-06-05 11-15-32](https://github.com/Deepesh76780/DecentralizedFileSharing/assets/99245631/bafe6739-ea36-4d3a-a7c6-b4f26bd5d743) |

| Shared Data Access | List of shared data address|
| ------- | ------- |
| ![Screenshot from 2023-06-05 11-16-21](https://github.com/Deepesh76780/DecentralizedFileSharing/assets/99245631/425d7dca-0eda-4bbf-b9fb-0b9df4d3e3fe) | ![Screenshot from 2023-06-05 11-17-29](https://github.com/Deepesh76780/DecentralizedFileSharing/assets/99245631/c7488b78-0a94-4f6f-b8ea-41227cff4b2c) |

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [Smart Contract](#smart-contract)
- [Frontend](#frontend)
- [Contributing](#contributing)

## Installation

To install and run the decentralized GDrive project on your local machine, please follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/decentralized-gdrive.git`
2. Navigate to the project directory: `cd decentralized-gdrive`
3. Install the dependencies for the smart contract:
   - Make sure you have [Node.js](https://nodejs.org) installed.
   - Install Hardhat: `npm install hardhat`
4. Install the dependencies for the frontend:
   - Navigate to the `frontend` directory: `cd frontend`
   - Install Node.js dependencies: `npm install`

## Usage

1. Start a local blockchain network using Hardhat: `npx hardhat node`
2. Deploy the smart contract to the local network:
   - Navigate to the project directory: `cd decentralized-gdrive`
   - Compile the smart contract: `npx hardhat run --network localhost scripts/deploy.js`
3. Start the frontend development server:
   - Navigate to the `client` directory: `cd client`
   - Run the development server: `npm start`
4. Open your web browser and visit `http://localhost:3000` to access the decentralized GDrive application.
5. connect your local server with metamask

## Architecture

The decentralized GDrive project is built using the following technologies:

- **Harhat**: A development environment for Ethereum smart contracts that provides testing and deployment capabilities.
- **Smart Contract (Solidity)**: The smart contract is responsible for managing the file storage, access control, and ownership on the blockchain.
- **React.js**: The frontend is developed using React.js, a popular JavaScript library for building user interfaces.
- **Pinata**: Pinata is used as the decentralized file storage service for storing the files securely.


## Smart Contract

The smart contract is written in Solidity, the programming language used for Ethereum smart contracts. It provides the following functionality:

- File upload and storage on the blockchain.
- Access control mechanisms to ensure only authorized users can modify or access files.
- Ownership transfer of files between users.

The smart contract is located in the `contracts` directory.

## Frontend

The frontend of the decentralized GDrive project is built using React.js. It provides a user-friendly interface to interact with the smart contract and perform the following actions:

- Upload files to the decentralized storage.
- View and download files stored on the blockchain.
- Manage file access permissions.
- Transfer file ownership.

The frontend code is located in the `client` directory.

## Contributing

Contributions to the decentralized GDrive project are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-feature`.
3. Make the necessary changes and commit your code: `git commit -am 'Add new feature'`.
4. Push the changes to your forked repository: `git push origin my-feature`.
5. Submit a pull request describing your changes.





