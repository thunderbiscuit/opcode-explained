# OP_GREATERTHANOREQUAL

:::info
**Opcode number:** 162
**Byte representation:** `0xa2`
**Short description:** Pop the top two items; push 1 if the second is greater than or equal to the top, 0 otherwise.
:::

`OP_GREATERTHANOREQUAL` compares the top two items on the stack as integers. If the second item is greater than or equal to the top item, it pushes 1 (true) onto the stack. If not, it pushes an empty array (false). Both items are removed from the stack after the comparison.

### Operation
1. Take the top item (a) and the second item (b) from the stack.
2. Compare the two items:
   - If b >= a, push 1 (true) onto the stack.
   - Otherwise, push an empty array (false) onto the stack.
3.	Remove the original items (a and b) from the stack.

### Notes

- Both items must be valid integers. Bitcoin Script interprets byte arrays up to **4 bytes** as integers.
- An empty array (`[]`) is treated as 0 when compared.
- If there are fewer than two items on the stack when `OP_GREATERTHAN` is executed, the script will fail.


## Examples

### Example 1: Second item is greater than the top item

```shell
# ASM script
OP_3 OP_2 OP_GREATERTHANOREQUAL

# Raw script
5352a1

# Stack (before OP_GREATERTHANOREQUAL)
2  # top
3

# Stack (after OP_GREATERTHANOREQUAL)
1  # true, as 3 >= 2
```

### Example 2: Second item is equal to the top item

```shell
# ASM script
OP_2 OP_2 OP_GREATERTHANOREQUAL

# Raw script
5252a1

# Stack (before OP_GREATERTHANOREQUAL)
2  # top
2

# Stack (after OP_GREATERTHANOREQUAL)
1  # true, as 2 >= 2
```
