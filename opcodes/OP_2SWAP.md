# OP_2SWAP

:::info
**Opcode number:** 114  
**Byte representation:** `0x72`  
**Short description:** Swap the top two pairs of stack items.
:::

[`OP_2SWAP`](./OP_2SWAP.md) is used to swap the top two pairs of items on the stack. The first and second stack items are swapped with the third and fourth items.

### Operation

1. Swap the top two items with the third and fourth items on the stack, preserving the order of each pair.

### Notes

- This opcode works with pairs of stack items. If there are fewer than four items on the stack when [`OP_2SWAP`](./OP_2SWAP.md) is executed, the script will fail.
- [`OP_SWAP`](./OP_SWAP.md) is a related opcode for swapping just the top two items.

## Examples

### Example 1

Swapping the top two pairs with six total items:
```shell
# ASM script
OP_1 OP_2 OP_3 OP_4 OP_5 OP_6 OP_2SWAP

# Raw script
51525354555672

# Stack (before OP_2SWAP)
6  # top
5
4
3
2
1

# Stack (after OP_2SWAP)
4
3
6
5
2
1
```
