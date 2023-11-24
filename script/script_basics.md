# Script Basics

The Bitcoin ledger consists of a large, dynamic set of Unspent Transaction Outputs (UTXOs) monitored by a world-wide network of nodes. Control of these outputs is dictated by private keys, which can cryptographically sign transactions. A signature proves the ownership of a private key without revealing it to the network. Valid signatures result in the reassignment of UTXOs to other owners, a process also known as "spending". 

The language through which the network participants communicate is simply called Script or Bitcoin Script. Script is unlike modern programming languages–it most closely resembles a stack-oriented language from the late 1960's called [Forth](https://en.wikipedia.org/wiki/Forth_(programming_language)). Satoshi chose this style for its simplicity and minimal storage requirements. 

Some other important properties of Script:

- Turing incomplete – this prevents loop-based denial-of-service attacks on the network

- Stateless – any valid construction contains all necessary information for network participants to validate it