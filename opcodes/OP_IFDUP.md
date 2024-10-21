# OP_IFDUP

:::info
**Opcode number:** 115  
**Byte representation:** `0x73`  
**Short description:** Duplicate the top stack item only if it is non-zero.
:::

[`OP_IFDUP`](./OP_IFDUP.md) duplicates the top item on the stack if and only if it is non-zero. If the top item is zero, the stack remains unchanged.

### Operation
1. Check the top item on the stack.
2. If the item is non-zero, it is duplicated (pushed onto the stack again).
3. If the item is zero, no duplication occurs, and the stack remains unchanged.

### Notes
- This opcode is useful in conditional operations, where duplication occurs based on the value of the top stack item.
- A related opcode, [`OP_DUP`](./OP_DUP.md), always duplicates the top stack item, regardless of its value.

## Examples

### Example 1

Duplicating a non-zero stack item:

```shell
# ASM script
OP_1 OP_IFDUP

# Raw script
5173

# Stack (before OP_IFDUP)
1

# Stack (after OP_IFDUP)
1
1
```

### Example 2

No duplication of a zero stack item:

```shell
# ASM script
OP_0 OP_IFDUP

# Raw script
0073

# Stack (before OP_IFDUP)
0

# Stack (after OP_IFDUP)
0 # no change
```
