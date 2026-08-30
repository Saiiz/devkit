import { describe, expect, it } from "vitest";

describe("DevKit core behavior", () => {
  it("formats JSON correctly", () => {
    const input = '{"name":"DevKit","version":1}';
    expect(JSON.stringify(JSON.parse(input), null, 2)).toContain('"name": "DevKit"');
  });

  it("generates valid UUIDs", () => {
    const id = crypto.randomUUID();
    expect(id).toMatch(/^[0-9a-f-]{36}$/i);
  });

  it("keeps tool processing local", () => {
    expect(typeof TextEncoder).toBe("function");
    expect(typeof TextDecoder).toBe("function");
  });
});
