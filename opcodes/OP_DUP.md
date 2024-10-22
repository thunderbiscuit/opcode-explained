# OP_DUP

:::info
**Opcode number:** 118  
**Byte representation:** `0x76`  
**Short description:** Duplicate the top item on the stack.
:::

`OP_DUP` is used to duplicate the top item on the stack, pushing a copy of it onto the stack. This opcode is frequently used in Bitcoin scripts to create copies of data, especially for validation purposes like signature checking.

### Operation

1. Copy the top item from the stack.
2. Push this copy onto the stack, making it the new top item.

### Notes

- `OP_DUP` is commonly used in scripts like **Pay-to-PubKeyHash (P2PKH)** to duplicate the public key for signature verification.
- If the stack is empty when `OP_DUP` is executed, the script will fail.

## Example

Duplicating the top item when there are multiple items on the stack:

```shell
# ASM script
OP_1 OP_2 OP_DUP

# Raw script
515276

# Stack (before OP_DUP)
2
1

# Stack (after OP_DUP)
2  # duplicated item
2
1
```
