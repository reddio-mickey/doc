# Overview

## What are the current problems with developing on Ethereum?

Developers, especially app and game developers, on Ethereum face the following challenges:
1. **Scalability:** Ethereum can only process a limited number of transactions per second, which can lead to network congestion during periods of high activity. This scalability issue can significantly impact the performance of apps and games, particularly those that require frequent transactions.
2. **High Transaction Fees (Gas Fees)**: Every transaction on Ethereum requires a fee, referred to as a "gas fee" to incentivize miners to include the transaction in the blockchain. These fees can become prohibitively high when the network is busy, which can significantly impact the user experience of apps and games with recurring transactions.
3. **Complexity of Smart Contract Development**: Writing and deploying smart contracts, the backbone of Ethereum apps and games, requires a good understanding of the Solidity programming language and the unique aspects of blockchain technology. Errors in smart contracts can be exorbitant, as they can't be changed once deployed.
4. **Interoperability**: Creating applications or games that can interact with other smart contracts and/or blockchains can be challenging, limiting the possibility of integrating with various blockchain ecosystems.
5. **Data Storage**: Blockchain isn't designed for storing large amounts of data. Developers must find alternative ways to store data off-chain, which can introduce additional complexity and potential points of failure.

## Why RedSonic is the solution to these network problems on Ethereum?
RedSonic, a Layer 2 solution on Ethereum for apps/games, is able to remedy issues related to scalability and transaction fees and therefore enhances the development of applications and games on Ethereum.

1. **RedSonic provides APIs and SDKs to make it easy build on Layer 2**. RedSonic provides Application Programming Interfaces (APIs) and Software Development Kits (SDKs) to simplify the development process for Layer 2 solutions. The APIs and SDKs offered by RedSonic make it easier for developers to interact with Layer 2 solutions on the Ethereum network, enabling them to customize and optimize their applications or games in accordance with the specific requirements of their use cases. This means that developers can easily integrate RedSonic into their existing applications and games, or build new ones from scratch, without the significant additional overheads of developing their own Layer 2 solutions from the ground up. 
2. **Build decentralized trading platforms with scalability up to 10k TPS and minimum trading fee**. RedSonic's Layer 2 solution enables the creation of decentralized trading platforms with impressive scalability and low trading fees. With its advanced zk-STARK technology, RedSonic can support transaction speeds of up to 10,000 transactions per second (TPS), far exceeding the capacity of the Ethereum network itself. This means that traders can engage in high-frequency trading without having to worry about network congestion or excessive transaction fees.

In addition to lightning-fast transaction speeds, RedSonic's Layer 2 solution also offers users significantly lower trading fees compared to traditional centralized exchanges. This is possible due to the elimination of intermediary fees that are incurred when using traditional exchanges.



## What can you build Using RedSonic’s API
There are many applications that can build upon RedSonic’s API. Here are some examples:
1. **[SBT]**(https://academy.binance.com/en/articles/what-are-soulbound-tokens-sbt). By using RedSonic's API, customers can mint NFTs, granting them ownership and provable authenticity over their digital assets.
2. **Game NFTs**. RedSonic provides an API & SDK for Mints/Transfer/Deposit/Withdrawal of NFTs. By providing these essential functionalities, RedSonic empowers developers and users to seamlessly manage and interact with NFTs using their platform.
3. **NFT Marketplace**. RedSonic provides the buy and sell API & SDK to build in-app marketplaces. RedSonic's API and SDK not only facilitate the creation and management of NFTs, but they also extend support for building in-app marketplaces. This means that developers have the ability to integrate RedSonic's buy and sell functionalities directly into their applications and/or platforms.

There are many other scenarios that you can explore, such as payment gateways and others.

## Components & Features

RedSonic platform consists of SDKs, APIs and Dashboard

![components](/components.png)

### [Dashboard](https://dashboard.redsonic.com/login)
On the dashboard, you can get access to an API key and integrate from the back-end to RedSonic’s APIs; We are providing the basic APIs usage for now and we are enhancing the dashboard based on your feedback, such as showing more usage statistics. 
![dashboard quickstart](/dashboard-quickstart.png)
Dashboards provide the following features:
1. Deploy contracts and register contracts to RedSonic on Layer 1(Ethereum)
2. Mint NFTs on dashboard
3. Deposit assets to Layer 2
4. IPFS Storages
5. Statistics about your contracts

### [SDKs](/guide/SDKs/jssdk-reference/initiate-sdk)

Javascript, iOS, Android, Unity, Java And Python SDK is provided for your front-end cross platform integration.  We highly recommend you integrate from the front-end to generate private key and to allow your users to sign using your UI.


### [APIs](/guide/api-reference/api-reference)

Back-end APIs are also provided, click [here](https://api-docs.redsonic.com/?_gl=1*ic7u6n*_ga*NzgzNDU3NTczLjE2NTA1MDYzMDY.*_ga_DZPN2FT3DF*MTY4ODA0MTc1NC4zNzEuMS4xNjg4MDQxNzU5LjAuMC4w) to see full API docs.



