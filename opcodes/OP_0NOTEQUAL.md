# OP_0NOTEQUAL

:::info
**Opcode number:** 146  
**Byte representation:** `0x92`  
**Short description:** Pop the top item and push `1` if the top item is not zero; otherwise, push an empty array.
:::

`OP_0NOTEQUAL` pops the top item and checks whether it is **not zero**. If the item is non-zero, it pushes `1` (true) onto the stack. If the item is zero (or an empty array), it pushes an empty array (`false`).

### Operation

1. Pop the top item.
2. If the item is zero, push an empty array (`false`) onto the stack.
3. If the item is non-zero, push `1` (`true`) onto the stack.

### Notes

- If the stack is empty when `OP_0NOTEQUAL` is executed, the script will fail.

## Examples

### Example 1: Checking a zero value

```shell
# ASM script
OP_PUSHBYTES_2 0000 OP_0NOTEQUAL

# Raw script
02000092

# Stack (before OP_0NOTEQUAL)
0000  # top

# Stack (after OP_0NOTEQUAL)
[]  # false (empty array, as the input was zero)
```

### Example 2: Checking a non-zero value

```shell
# ASM script
OP_2 OP_0NOTEQUAL

# Raw script
5292

# Stack (before OP_0NOTEQUAL)
2  # top

# Stack (after OP_0NOTEQUAL)
1  # true, as the input was non-zero
```
