# pwn-request-lab (own-infra PoC)

Defensive reproduction of the `pull_request_target` "pwn request" vulnerability,
run ONLY against this account's own lab repository with a fake canary secret.

- `vulnerable.yml` : `pull_request_target` + checkout PR head + `npm install` + `SUPER_SECRET`  -> leaks
- `secure.yml`     : `pull_request` (no secrets for PR) + same actions                          -> blocked
