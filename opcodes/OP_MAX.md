# OP_MAX

:::info
**Opcode number:** 164  
**Byte representation:** `0xa4`  
**Short description:** Pop the top two items; push the larger of the two onto the stack.  
:::

`OP_MAX` compares the top two items on the stack as integers and pushes the larger value back onto the stack. Both original items are removed, and the larger value becomes the new top item.

### Operation

1. Pop the top item and the second item from the stack.
2. Compare the two items, and push the larger of the two values onto the stack.

### Notes

- Both items must be valid integers. Bitcoin Script interprets byte arrays up to **4 bytes** as integers.
- An empty array (`[]`) is treated as 0 when compared.
- If there are fewer than two items on the stack when `OP_MAX` is executed, the script will fail.

## Examples

### Example 1: Comparing two positive integers

```shell
# ASM script
OP_3 OP_2 OP_MAX

# Raw script
5352a4

# Stack (before OP_MAX)
2  # top
3

# Stack (after OP_MAX)
3  # larger value
```

### Example 2: Comparing a positive and a negative integer

```shell
# ASM script
OP_1NEGATE OP_2 OP_MAX

# Raw script
4f52a4

# Stack (before OP_MAX)
2  # top
-1

# Stack (after OP_MAX)
2  # larger value
```
