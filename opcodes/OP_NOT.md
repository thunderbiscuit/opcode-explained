# OP_NOT

:::info
**Opcode number:** 145  
**Byte representation:** `0x91`  
**Short description:** Pop the top item and push `1` if it is zero; otherwise, push `0`.
:::

`OP_NOT` pops the top item on the stack and checks if it is zero. If it is, `OP_NOT` pushes `1` (true) onto the stack. If the item is non-zero, it pushes an empty array (`false`). This operation is often used in conditional scripts to invert the truthiness of a value.

### Operation

1. Pop the top item on the stack.
2. Check if it is zero.
3. If the item is zero, push `1` (true) onto the stack.
4. If the item is non-zero, push an empty array (`false`) onto the stack.

### Notes

- In Bitcoin Script, an empty array represents `false`, while `1` represents `true`.
- If the stack is empty when `OP_NOT` is executed, the script will fail.

## Examples

### Example 1

Using `OP_NOT` with a zero item:

```shell
# ASM script
OP_0 OP_NOT

# Raw script
0091

# Stack (before OP_NOT)
(empty array)

# Stack (after OP_NOT)
1
```

### Example 2

Using `OP_NOT` with a non-zero item:

```shell
# ASM script
OP_1 OP_NOT

# Raw script
5191

# Stack (before OP_NOT)
1

# Stack (after OP_NOT)
(empty array)
```
