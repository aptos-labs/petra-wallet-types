# petra-wallet-types
A typescript types package for the Petra wallet's dapp interface.

# Install

```
yarn add https://github.com/aptos-labs/petra-wallet-types
```

# How to use it

```ts
import 'petra-wallet-types';

const result = await window.aptos.connect(); // checking type right

const result2 = await window.aptos.connect(true); // ERROR because connect doesn't accept parameter
```