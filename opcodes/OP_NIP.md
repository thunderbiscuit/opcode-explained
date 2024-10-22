# OP_NIP

:::info
**Opcode number:** 119  
**Byte representation:** `0x77`  
**Short description:** Remove the second item from the top of the stack.
:::

`OP_NIP` is used to remove the second item from the top of the stack, while leaving the top item and the rest of the stack intact. This opcode is useful when you need to discard an intermediate value but keep the top item for further operations.

### Operation

1. Remove (drop) the second item from the top of the stack.
2. The top item remains unaffected, and the third item (if present) moves up to become the second item.

### Notes

- `OP_NIP` allows you to efficiently discard the second stack item without disturbing the top of the stack.
- If there are fewer than two items on the stack when `OP_NIP` is executed, the script will fail.

## Example
Removing the second item from the stack:

```shell
# ASM script
OP_1 OP_2 OP_3 OP_NIP

# Raw script
51525377

# Stack (before OP_NIP)
3
2
1

# Stack (after OP_NIP)
3
1
```
