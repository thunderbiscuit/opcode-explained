# OP_EQUALVERIFY

:::info
**Opcode number:** 136  
**Byte representation:** `0x88`  
**Short description:** Compare the top two items on the stack and halts the script if they are not equal.
:::

`OP_EQUALVERIFY` combines the functionality of `OP_EQUAL` and `OP_VERIFY`. It compares the top two items on the stack and removes them. If they are equal, the script continues execution. If they are not equal, the script fails immediately. This opcode is commonly used in scripts to ensure that two values match without leaving a `true` or `false` result on the stack.

### Operation

1. Compare the top two items on the stack.
2. If the items are equal, remove them from the stack and continue the script.
3. If the items are not equal, the script fails.

### Notes

- `OP_EQUALVERIFY` is frequently used in **Pay-to-PubKeyHash (P2PKH)** scripts, where it ensures the provided public key hash matches the expected hash.
- Unlike `OP_EQUAL`, `OP_EQUALVERIFY` does not leave a result (true or false) on the stack. Instead, it either allows the script to continue or fails immediately.

## Examples

### Example 1

Using `OP_EQUALVERIFY` to check equality:

```shell
# ASM script
OP_7 OP_7 OP_EQUALVERIFY

# Raw script
575788

# Stack (before OP_EQUALVERIFY)
7
7

# Stack (after OP_EQUALVERIFY)
(empty stack)  # items removed, script continues
```

### Example 2

Using `OP_EQUALVERIFY` with unequal items:
```shell
# ASM script
OP_1 OP_2 OP_EQUALVERIFY

# Raw script
515288

# Stack (before OP_EQUALVERIFY)
2  # top
1

# Stack (after OP_EQUALVERIFY)
# Script fails immediately due to inequality
```

## Common Usage: Pay to Public Key Hash (P2PKH)

In **P2PKH** scripts, `OP_EQUALVERIFY` is used to ensure the provided public key hash matches the expected hash:

```shell
# ASM script for P2PKH
OP_DUP OP_HASH160 <PubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
```

Here, `OP_EQUALVERIFY` confirms that the hash of the provided public key matches the expected `PubKeyHash`. If they match, the script continues to `OP_CHECKSIG`; otherwise, it fails.
