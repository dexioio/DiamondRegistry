# DiamondRegistry
This repository contains an implementation of Dexio's Ethereum-based diamond registry. This application uses [ERC721](https://github.com/ethereum/eips/issues/721) smart contracts as assets to control write permissions to an IPFS document store. With this system for transferable write permissions in place, we provide a product for securely sharing a verifiable record of diamond data.

# Incentives
Our diamond registry connects the records of diamond miners, midstream stone cutters/polishers, and industry financiers. In order to bring these players together in an opaque environment where trust is in short supply, we had to develop a solution which incentivized participation from each party.

## Miners

The first party to insert data into our registry is the diamond miners. A participating miner will produce a 3D scan of a rough stone using industry standard equipment. The miner will upload a scan of this stone to the [IPFS](https://github.com/ipfs/ipfs), at which time an ERC721 record will be created for that diamond. The miner can, using the public adress of the stone, always refer to the records attached to the stone.

When the miner sells the stone on to a midstream player, they transfer to that player the ERC721 record. At that point, the miner will be unable to edit the records associated with the diamond, but can continue to view and track the stone. The miner therefore is incentivized to participate because they will have increased visibility into the market and path taken by individual diamonds after they've been sold.

## Midstream

Midstream players, under the Dexio system, can use the ERC721 records associated with their purchased diamonds to verify the honesty of the diamond miners. When the midstream player takes ownership of the diamond, they can view the scan attached to that stone by the miner. By taking their own 3D scan of the diamond and comparing to the record left by the miner, a midstream player will know right away whether or not the miner is being honest about the quality of the particular stone. Should the miner have lied, codifying these immutable records into the IPFS and Ethereum blockchain leaves a permanent and unalterable record of miner dishonesty for clear dispute resolution.

Midstream players, aside from keeping miners honest, also serve to benefit from Dexio's system by additional guarantees they can provide to financing institutions.

## Financing

Sources of financing for midstream players in this industry are limited due to credit risk and poor transparency. A financing istitution can know for certain that a midstream player they are financing is not "double-lending" any stone as collateral by taking ownership of the unique ERC721 record associated with said stone. Only one party will be able to own this record at any given time, which can allow a financial institution to be certain that they are the only party lending against that record.

Additionally, financing institutions will be able to have read access to any of the original diamond records attached to the stone by the miner, including the 3D scans. In addition to data attached to the stone by the midstream player, these diamond records allow the financing institution to more easily verify the midstream player's claims about the quality of the stone by checking it against the 3rd party miner's original data.
