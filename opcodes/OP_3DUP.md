# OP_3DUP
:::info
**Opcode number:** 111  
**Byte representation:** `0x6f`  
**Short description:** Duplicates the top three stack items.
:::

[`OP_3DUP`](./OP_3DUP.md) duplicates the top three items on the stack, pushing three additional copies of these items onto the stack. This can be useful for operations where the same values are needed multiple times without removing the original values.

### Operation
1. Duplicate the top three stack items.
2. Push these duplicates back onto the stack.

### Detailed Description
When [`OP_3DUP`](./OP_3DUP.md) is executed, it takes the top three items from the stack, duplicates them, and pushes the duplicates back onto the stack in the same order. This means the stack will grow by three items, and the original items will remain in their places.

## Notes
- If there are fewer than three items on the stack when [`OP_3DUP`](./OP_3DUP.md) is executed, the script will fail.

## Examples
### Example 1
The following script duplicates the top three items on the stack, leaving six items on the stack.
```shell
# ASM script
OP_1 OP_2 OP_3 OP_3DUP

# Raw script
5152536f

# Final stack
3
2
1
3
2
1
```
