# OP_SHA1
:::info
**Opcode number:** 167  
**Byte representation:** `0xa7`  
**Short Description:** Hash the top stack item using SHA1.  
:::

The `OP_SHA1` opcode replaces the top stack item with its SHA1 hash.
If the stack is empty the script fails.

Note that SHA1 is not considered a secure hash function anymore.

## Example
```shell
# ASM script
OP_0 OP_SHA1

# Raw script
00a7

# Final stack
da39a3ee5e6b4b0d3255bfef95601890afd80709
```
