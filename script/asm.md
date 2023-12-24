# Notes on Assembly (ASM) representation

### Omitted opcodes
1. In ASM notation, it is common to omit the opcodes that put data on the stack, because the data itself implies there was an opcode putting it there. For example, the 2 bytes `abab` require an opcode to push them on the stack. The common way to do this would be with the [`OP_PUSHBYTES_2`](../opcodes/OP_PUSHBYTES_2.md) opcode, `0x02`. The full script putting this data on the stack would therefore be
```shell
# Raw script
02abab
```

but the ASM representation is likely to be simply
```shell
# ASM (implicit)
abab
```

instead of its more explicit
```shell
# ASM (explicit)
OP_PUSHBYTES_2 abab
```

This can create a bit of confusion at first because the raw scripts don't always seem to match their ASM representations. This website strives to use the fully explicit version of assembly, but it's useful to know that this is not the only way ASM is written.

### Opcodes for pushing small numbers on the stack
You might see opcodes like [`OP_2`](../opcodes/OP_2.md), [`OP_3`](../opcodes/OP_3.md), and so on represented only as `2`, `3`, and so on in ASM. This is because these opcodes simply push the number in their name on the stack, and so representing them as simply those numbers is thought of as being easier to read (if more confusing). Here is what this looks like in script:
```shell
# ASM representation 1
OP_3

# ASM representation 2
3

# Raw script
53

# Final stack
03
```

This website strives to use the fully explicit version (representation 1 in the example above).
