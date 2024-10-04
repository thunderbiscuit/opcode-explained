# OP_SIZE
:::info
**Opcode number:** 130  
**Byte representation:** `0x82`  
**Short Description:** Push the length of the top stack item in bytes onto the stack
:::

The [`OP_SIZE`](./OP_SIZE.md) opcode pushes the length of the top stack item in bytes onto the stack.

## NOTES 
- The stack item that was previously the top stack item is unaffected and simply becomes the second item on the stack following the output from [`OP_SIZE`](./OP_SIZE.md)
- If the stack is empty the script fails.

## Examples
### Example 1
Measuring the length of 0 as an empty byte array results in a length of 0:
```shell
# ASM script
OP_0 OP_SIZE

# Raw script
0082

# Final stack
0
0
```
### Example 2
Any opcode that returns true pushes to the stack a 1 which is a single byte:
```shell
# ASM script
OP_1 OP_2 OP_ADD OP_3 OP_EQUAL OP_SIZE

# Raw script
515293538782

# Final stack
1
1
```
### Example 3
OP_SIZE measures the length in bytes and since [`OP_PUSHBYTES_3`](./OP_PUSHBYTES_3.md) always pushes 3 bytes the length will be 3: 
```shell
# ASM script
OP_PUSHBYTES_3 a4b5c6 OP_SIZE

# Raw script
03a4b5c682

# Final stack
3
a4b5c6
```
