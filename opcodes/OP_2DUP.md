# OP_2DUP
:::info
**Opcode number:** 110  
**Byte representation:** `0x6e`  
**Short description:** Duplicates the top two stack items.
:::

[`OP_2DUP`](./OP_2DUP.md) duplicates the top two items on the stack, pushing two additional copies of these items onto the stack. This can be useful for operations where the same values are needed multiple times without removing the original values.

### Operation
1. Duplicate the top two stack items.
2. Push these duplicates back onto the stack.

### Detailed Description
When [`OP_2DUP`](./OP_2DUP.md) is executed, it takes the top two items from the stack, duplicates them, and pushes the duplicates back onto the stack in the same order. This means the stack will grow by two items, and the original items will remain in their places.

## Notes
- If there are fewer than two items on the stack when [`OP_2DUP`](./OP_2DUP.md) is executed, the script will fail.

## Examples
### Example 1
The following script duplicates the top two items on the stack, leaving four items on the stack.
```shell
# ASM script
OP_1 OP_2 OP_2DUP

# Raw script
51526e

# Final stack
2
1
2
1
```
