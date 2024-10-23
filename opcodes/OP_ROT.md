# OP_ROT

:::info
**Opcode number:** 123  
**Byte representation:** `0x7b`  
**Short description:** Rotate the top three stack items.
:::

`OP_ROT` is used to pull the third item from the top of the stack and move it to the top, while shifting the other two items down. This operation essentially rotates the top three stack items.

### Operation

1. Remove the third item from the top of the stack.
2. Push it to the top of the stack.
3. The original top and second items are shifted down one position.

### Notes

- `OP_ROT` is useful when you need to rearrange the top three items of the stack.
- If there are fewer than three items on the stack when `OP_ROT` is executed, the script will fail.

### Example

Rotating the third item to the top:

```shell
# ASM script
OP_1 OP_2 OP_3 OP_ROT

# Raw script
5152537b

# Stack (before OP_ROT)
3  # top
2
1

# Stack (after OP_ROT)
1  # third item rotated to the top
3  # original top
2
```
