# OP_VERIFY
:::info
**Opcode number:** 105  
**Byte representation:** `0x69`  
**Short description:** Checks the top stack value. If it's 0 or an empty string, the script fails; otherwise, it continues and the value is popped.
:::

[`OP_VERIFY`](./OP_VERIFY.md) is an opcode that allows for quick validation of conditions without explicitly ending the script. It's used to ensure certain requirements are met.

### Operation
1. Pop the top stack value.
2. If the value is `0` or an empty string, the script immediately fails and the transaction is considered invalid.
3. If the value is non-zero, continue executing the script, with the item now removed from the stack.

The primary use of [`OP_VERIFY`](./OP_VERIFY.md) is to verify that a certain condition holds without having to use conditional opcodes. If the condition does not hold, the script will terminate at the [`OP_VERIFY`](./OP_VERIFY.md) step.

## Notes
- The opcode can be thought of as a shorthand for `OP_IF OP_DROP OP_ELSE OP_RETURN OP_ENDIF`.

## Examples
### Example 1
In a hypothetical script where a `1` is pushed onto the stack, the following would pass verification:
```shell
# ASM script
OP_1 OP_VERIFY

# Raw script
5169

# Final stack
(empty, since the 1 was popped by OP_VERIFY, but the script succeeds)
```

### Example 2
For a script that starts by pushing `0` onto the stack, the script would fail at the verification step:
```shell
# ASM script
OP_0 OP_VERIFY

# Raw script
0069

# Script result
Script fails at OP_VERIFY.
```
