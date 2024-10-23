# OP_SWAP

:::info
**Opcode number:** 124  
**Byte representation:** `0x7c`  
**Short description:** Swap the top two stack items.
:::

`OP_SWAP` is used to swap the positions of the top two items on the stack. This operation is commonly used when you need to reorder the top items without affecting the rest of the stack.

### Operation

1. Swap the top two items on the stack.
2. The second item becomes the top item, and the original top item moves to the second position.

### Notes

- `OP_SWAP` only affects the top two items on the stack and leaves the rest of the stack unchanged.
- If there are fewer than two items on the stack when `OP_SWAP` is executed, the script will fail.

## Example

Swapping the top two items:

```shell
# ASM script
OP_1 OP_2 OP_3 OP_SWAP

# Raw script
5152537c

# Stack (before OP_SWAP)
3
2
1

# Stack (after OP_SWAP)
2
3
1
```
