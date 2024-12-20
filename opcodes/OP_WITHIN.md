# OP_WITHIN

:::info
**Opcode number:** 165  
**Byte representation:** `0xa5`  
**Short description:** Pop the top three items; if the first item is within the range specified by the second and third stack items, push 1, otherwise, push an empty array.  
:::

`OP_WITHIN` checks if the top item on the stack is within a specified range. Specifically, it evaluates whether the first item is greater than or equal to the second item and less than the third item (min <= x < max). If true, it pushes 1 (true) onto the stack; otherwise, it pushes an empty array (false).

### Operation

1. Pop the top three items from the stack:
    - x (fist item): The value to check.
    - min (second item): The lower bound of the range.
    - max (third item): The upper bound of the range.
2. Evaluate whether min <= x < max:
    - If true, push 1 (true) onto the stack.
    - If false, push an empty array (false) onto the stack.

### Notes

- The range is _inclusive_ of the lower bound (min <= x) and _exclusive_ of the upper bound (x < max).
- Both items must be valid integers. Bitcoin Script interprets byte arrays up to **4 bytes** as integers.
- An empty array (`[]`) is treated as 0 when compared.
- If there are fewer than two items on the stack when `OP_GREATERTHAN` is executed, the script will fail.

## Examples

### Example 1: Value is within the range

```shell
# ASM script
OP_2 OP_1 OP_3 OP_WITHIN

# Raw script
525153a5

# Stack (before OP_WITHIN)
3  # max
1  # min
2  # x

# Stack (after OP_WITHIN)
1  # true, as 1 <= 2 < 3
```

### Example 3: Value is at the lower bound

```shell
# ASM script
OP_1 OP_1 OP_3 OP_WITHIN

# Raw script
515153a5

# Stack (before OP_WITHIN)
3  # top (max)
1  # min
1  # x

# Stack (after OP_WITHIN)
1  # true, as 1 <= 1 < 3
```
