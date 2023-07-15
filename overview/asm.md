# Notes on ASM (assembly) representation
1. In ASM notation, it is common to omit the opcodes that put data on the stack, because the data itself implies there was an opcode putting it there. For example, the 2 bytes `abab` require an opcode to push them on the stack. The common way to do this would be with the `OP_PUSHBYTES_2` opcode, `0x02`. The full script putting this data on the stack would therefore be
```shell
02abab
```
but the ASM representation is likely to be simply
```shell
abab
```

This can create a bit of confusion at first because the raw scripts don't always seem to match their ASM representations.

2. You might see opcodes like `OP_2`, `OP_3`, and so on represented only as `2`, `3`, and so on in ASM. This is because these opcodes simply push the number in their name on the stack, and so representing them as simply those numbers is thought of as being easier to read (if more confusing). Here is what this looks like in script:
```shell
# ASM script representation 1
OP_3

# ASM script representation 2
3

# Raw script
53

# Final stack
03
```
