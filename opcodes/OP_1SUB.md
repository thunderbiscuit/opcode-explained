# OP_1SUB

:::info
**Opcode number:** 140  
**Byte representation:** `0x8c`  
**Short description:** Decrement the top stack element in place.
:::

`OP_1SUB` decrements the top item on the stack by 1. This opcode is used in bitcoin Script to perform basic arithmetic, such as reducing a counter or adjusting a value in more complex scripts.

### Operation
1. Take the top item from the stack.
2. Subtract 1 from this item.
3. Push the result back onto the stack as the new top item.

### Notes
- `OP_1SUB` only works with integer values (4 bytes). If the top item cannot be interpreted as an integer, the script will fail.
- If the stack is empty when `OP_1SUB` is executed, the script will fail.

## Example

Decrementing a stack item:

```shell
# ASM script
OP_3 OP_1SUB

# Raw script
538c

# Stack (before OP_1SUB)
3

# Stack (after OP_1SUB)
2
```
