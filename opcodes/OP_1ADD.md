# OP_1ADD

:::info
**Opcode number:** 139  
**Byte representation:** `0x8b`  
**Short description:** Add 1 to the top item on the stack.
:::

`OP_1ADD` increments the top item on the stack by 1. This operation is used in Bitcoin Script when simple arithmetic is needed, often for counting or adjusting values during script execution.

### Operation
1. Take the top item from the stack.
2. Add 1 to this item.
3. Push the result back onto the stack as the new top item.

### Notes
- Arithmetic inputs are limited to signed 32-bit integers, but may overflow their output.
- If the input value for `OP_1ADD` is longer than 4 bytes, the script will fail. 
- If the stack is empty when `OP_1ADD` is executed, the script will fail.

## Example

Incrementing a stack item:

```shell
# ASM script
OP_2 OP_1ADD

# Raw script
528b

# Stack (before OP_1ADD)
2

# Stack (after OP_1ADD)
3 # result after adding 1
```
