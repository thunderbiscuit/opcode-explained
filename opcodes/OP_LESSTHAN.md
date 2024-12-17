# OP_LESSTHAN

:::info
**Opcode number:** 159  
**Byte representation:** `0x9f`  
**Short description:** Pop the top two items; push 1 if the second is less than the top, 0 otherwise.
:::

`OP_LESSTHAN` compares the top two items on the stack as integers. If the second item is less than the top item, it pushes `1` (`true`) onto the stack. If not, it pushes an empty array (`false`). Both items are removed from the stack after the comparison.

### Operation

1. Take the top item (`a`) and the second item (`b`) from the stack.
2. Compare the two items:
   - If `b < a`, push `1` (`true`) onto the stack.
   - Otherwise, push an empty array (`false`) onto the stack.
3. Remove the original items (`a` and `b`) from the stack.

### Notes

- Both items must be valid integers. Bitcoin Script interprets byte arrays up to **4 bytes** as integers.
- An empty array (`[]`) is treated as `0` when compared.
- If there are fewer than two items on the stack when `OP_LESSTHAN` is executed, the script will fail.

---

## Examples

### Example 1: Second item is less than the top item

```shell
# ASM script
OP_2 OP_3 OP_LESSTHAN

# Raw script
52539f

# Stack (before OP_LESSTHAN)
3  # top
2

# Stack (after OP_LESSTHAN)
1  # true, as 2 < 3
```

### Example 2: Second item is greater than the top item

```shell
# ASM script
OP_3 OP_2 OP_LESSTHAN

# Raw script
53529f

# Stack (before OP_LESSTHAN)
2  # top
3

# Stack (after OP_LESSTHAN)
[]  # false, as 3 is not less than 2
```

### Example 3: Comparing two zeros

```shell
# ASM script
OP_0 OP_0 OP_LESSTHAN

# Raw script
00009f

# Stack (before OP_LESSTHAN)
[]  # top
[]

# Stack (after OP_LESSTHAN)
[]  # false, as 0 is not less than 0
```
