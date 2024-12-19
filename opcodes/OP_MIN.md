# OP_MIN

:::info
**Opcode number:** 163  
**Byte representation:** `0xa3`  
**Short description:** Pop the top two items; push the smaller of the two onto the stack.  
:::

`OP_MIN` compares the top two items on the stack as integers and pushes the smaller value back onto the stack. Both original items are removed, and the smaller value becomes the new top item.

### Operation
1. Pop the top item and the second item from the stack.
2. Compare the two items, and push the smaller of the two values onto the stack.

### Notes

- Both items must be valid integers. Bitcoin Script interprets byte arrays up to **4 bytes** as integers.
- An empty array (`[]`) is treated as 0 when compared.
- If there are fewer than two items on the stack when `OP_GREATERTHAN` is executed, the script will fail.

## Examples

### Example 1: Comparing two positive integers

```shell
# ASM script
OP_3 OP_2 OP_MIN

# Raw script
5352a3

# Stack (before OP_MIN)
2  # top
3

# Stack (after OP_MIN)
2  # smaller value
```

### Example 2: Comparing a positive and a negative integer

```shell
# ASM script
OP_1NEGATE OP_2 OP_MIN

# Raw script
4f52a3

# Stack (before OP_MIN)
2  # top
-1

# Stack (after OP_MIN)
-1  # smaller value
```
