# OP_EQUAL

:::info
**Opcode number:** 135  
**Byte representation:** `0x87`  
**Short description:** Compare the top two items on the stack and push `1` if they are equal, `0` otherwise.
:::

`OP_EQUAL` is used to compare the top two items on the stack. If they are equal, it pushes `1` (true) onto the stack; if they are not equal, it pushes `0` (false). Both items being compared are removed from the stack.

### Operation

1. Compare the top two items on the stack.
2. If the items are equal, push `1` (true) onto the stack.
3. If the items are not equal, push `0` (false) onto the stack.

### Notes

- `OP_EQUAL` is commonly used in scripts that require equality checks, such as verifying if two hash values or public keys match.
- Both items being compared are consumed (removed) from the stack.
- If there are fewer than two items on the stack when `OP_EQUAL` is executed, the script will fail.

## Examples

### Example 1

Comparing two equal items:

```shell
# ASM script
OP_1 OP_1 OP_EQUAL

# Raw script
515187

# Stack (before OP_EQUAL)
1
1

# Stack (after OP_EQUAL)
1  # (true, since the two items are equal)
```

### Example 2
Comparing two unequal items:
```shell
# ASM script
OP_1 OP_2 OP_EQUAL

# Raw script
515287

# Stack (before OP_EQUAL)
2
1

# Stack (after OP_EQUAL)
0  # (false, since the two items are not equal)
```
