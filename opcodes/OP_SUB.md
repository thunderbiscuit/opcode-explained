# OP_SUB

:::info
**Opcode number:** 148  
**Byte representation:** `0x94`  
**Short description:** Pop two stack items and push the second minus the top.
:::

`OP_SUB` performs subtraction on the top two items on the stack. It subtracts the second item (just below the top item) from the top item and pushes the result back onto the stack. This operation is useful for basic arithmetic calculations within a bitcoin script.

### Operation

1. Take the top item (`a`) and the second item (`b`) from the stack.
2. Calculate `b - a`.
3. Push the result back onto the stack.

### Notes

- `OP_SUB` requires the top two items on the stack to be interpretable as integers (byte arrays up to 4 bytes).
- If there are fewer than two items on the stack, the script will fail.
- The result of `b - a` is pushed back onto the stack as the new top item.

## Example

Subtracting two positive integers:

```shell
# ASM script
OP_5 OP_3 OP_SUB

# Raw script
535594

# Stack (before OP_SUB)
3
5

# Stack (after OP_SUB)
2  # result of 5 - 3
```
